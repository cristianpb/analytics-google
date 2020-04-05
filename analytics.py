"""A simple example of how to access the Google Analytics API."""

import os
import json
from itertools import zip_longest
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


def get_results(service, profile_id, dimensions, metrics):
    # Use the Analytics Service Object to query the Core Reporting API
    # for the number of sessions within the past seven days.
    return service.data().ga().get(
            ids='ga:' + profile_id,
            start_date='7daysAgo',
            end_date='today',
            #dimensions='ga:country,ga:countryIsoCode,ga:city,ga:date,ga:deviceCategory,ga:source,ga:pagePath',
            #'ga:sessions'
            dimensions=','.join(dimensions),
            metrics=','.join(metrics)).execute()


def fetch_scope():
    # Define the auth scopes to request.
    scope = 'https://www.googleapis.com/auth/analytics.readonly'

    if os.environ.get('TOKEN') is not None:
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
    return service, profile_id

def get_df(dimensions, metrics):
    service, profile_id = fetch_scope()
    res = get_results(service, profile_id, dimensions, metrics)
    cols = list(map(lambda x: x[3:], dimensions)) + \
            list(map(lambda x: x[3:], metrics))
    df = pd.DataFrame(res.get('rows'), columns=cols)
    return df

def main():
    dimensions_1 = [
        'ga:dateHour',
        'ga:userType',
        'ga:source',
        'ga:pagePath',
        'ga:deviceCategory',
        'ga:country',
        'ga:city',
        ]
    metrics=[
        'ga:users',
        'ga:sessions',
        'ga:sessionDuration',
        'ga:timeOnPage',
        'ga:pageLoadTime',
        'ga:bounces'
        ]
    df = get_df(dimensions_1, metrics)
    df['date'] = df['dateHour'].str[0:8]
    df['hour'] = pd.to_numeric(df['dateHour'].str[8:10], downcast='integer')
    df_country = pd.read_csv('country.csv', names=['name', 'countryIsoCode'],
            skiprows=1)
    df = df.merge(df_country, left_on='country', right_on='name')
    df.drop(['dateHour', 'name'], axis=1, inplace=True)
    for col in map(lambda x: x[3:], metrics):
        df[col] = pd.to_numeric(df[col], downcast='integer')
    #df.to_json('data/google-analytics.json', orient='records')
    df.to_csv('public/data/data.csv', index=False, header=True)
    print("Success, total size {} rows and {} columns".format(
        len(df), df.shape[1]))

if __name__ == '__main__':
    main()
