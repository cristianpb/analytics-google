import os
import json
import pandas as pd
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange,
    Dimension,
    Metric,
    RunReportRequest,
)

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "./token.json"
PROPERTY_ID = os.environ['PROPERTY_ID']

def main(property_id=None):
    client = BetaAnalyticsDataClient()
    dimensions_names = [
            "dateHour",
            "pagePath",
            "deviceCategory",
            "pageReferrer",
            "searchTerm",
            "country",
            "city"
            ]
    metrics_names = [
            "totalUsers",
            "sessions",
            "averageSessionDuration",
            "userEngagementDuration",
            "bounceRate"
            ]
    request = RunReportRequest(
        property=f"properties/{property_id}",
        dimensions=[
            Dimension(name=dimension) \
                    for dimension in dimensions_names
                    ],
        metrics=[
            Metric(name=metric) \
                    for metric in metrics_names
                    ],
        date_ranges=[
            DateRange(start_date="7daysAgo", end_date="today")
            ],
    )
    response = client.run_report(request)

    cols = dimensions_names + metrics_names
    df = pd.DataFrame(
            data=[
                [row_dim.value for row_dim in row.dimension_values] + \
                [row_dim.value for row_dim in row.metric_values] \
                for row in response.rows
            ],
            columns=cols)
    df['date'] = df['dateHour'].str[0:8]
    df['hour'] = pd.to_numeric(df['dateHour'].str[8:10], downcast='integer')
    df_country = pd.read_csv('country.csv', names=['name', 'countryIsoCode'], skiprows=1)
    df = df.merge(df_country, left_on='country', right_on='name', how="left")
    df.drop(['dateHour', 'name'], axis=1, inplace=True)
    df.to_csv('public/data/data.csv', index=False, header=True)
    print("Success, total size {} rows and {} columns".format(*df.shape))

if __name__ == "__main__":
    main(property_id = PROPERTY_ID)
