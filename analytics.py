"""A simple example of how to access the Google Analytics API."""

import os
import json
import pandas as pd
from apiclient.discovery import build
from oauth2client.service_account import ServiceAccountCredentials


def get_service(api_name, api_version, scopes, token):
    """Get a service that communicates to a Google API.

    Args:
        api_name: The name of the api to connect to.
        api_version: The api version to connect to.
        scopes: A list auth scopes to authorize for the application.
        token: Token dict

    Returns:
        A service that is connected to the specified API.
    """
    credentials = ServiceAccountCredentials.from_json_keyfile_dict(
            token, scopes=scopes)

    # Build the service object.
    service = build(api_name, api_version, credentials=credentials)

    return service


def get_first_profile_id(service):
    # Use the Analytics service object to get the first profile id.

    # Get a list of all Google Analytics accounts for this user
    accounts = service.management().accounts().list().execute()

    if accounts.get('items'):
        # Get the first Google Analytics account.
        account = accounts.get('items')[0].get('id')

        # Get a list of all the properties for the first account.
        properties = service.management().webproperties().list(
                accountId=account).execute()

        if properties.get('items'):
            # Get the first property id.
            property = properties.get('items')[0].get('id')

            # Get a list of all views (profiles) for the first property.
            profiles = service.management().profiles().list(
                    accountId=account,
                    webPropertyId=property).execute()

            if profiles.get('items'):
                # return the first view (profile) id.
                return profiles.get('items')[0].get('id')

    return None


def get_results(service, profile_id):
    # Use the Analytics Service Object to query the Core Reporting API
    # for the number of sessions within the past seven days.
    return service.data().ga().get(
            ids='ga:' + profile_id,
            start_date='7daysAgo',
            end_date='today',
            dimensions='ga:country,ga:countryIsoCode,ga:city,ga:date,ga:deviceCategory,ga:source,ga:pagePath',
            metrics='ga:sessions').execute()


def fetch_data():
    # Define the auth scopes to request.
    scope = 'https://www.googleapis.com/auth/analytics.readonly'

    if os.environ['TOKEN'] is not None:
        token = json.loads(os.environ['TOKEN'])
    else:
        with open('token.json', 'r') as fp:
            token = json.loads(fp.read())

    # Authenticate and construct service.
    service = get_service(
            api_name='analytics',
            api_version='v3',
            scopes=[scope],
            token=token)

    profile_id = get_first_profile_id(service)
    return get_results(service, profile_id)

def main():
    res = fetch_data()
    df = pd.DataFrame(res.get('rows'),
            columns=['country', 'countryIsoCode', 'city', 'date', 'device', 'source', 'pagePath', 'sessions'])
    print(df.head().to_dict(orient='records'))
    #return df.to_dict(orient='records')
    df.to_csv('data.csv', index=False, header=True)

if __name__ == '__main__':
    main()
