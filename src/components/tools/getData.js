import { csv, timeParse } from 'd3';

export function loadCsv() {
  return csv('data.csv', (d) => {
    return {
      dd: dateFormatParser(d.date),
      day: d.date,
      country: d.country,
      city: d.city,
      pagePath: d.pagePath,
      countryIsoCode: d.countryIsoCode,
      device: d.device,
      source: d.source,
      sessions: +d.sessions
    };
  })
}

const dateFormatParser = timeParse("%Y%m%d");
