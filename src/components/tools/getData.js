import { csv, timeParse } from 'd3';
import { data } from './stores.js';

export function loadCsv() {
  csv('data.csv', (d) => {
    return {
      dd: dateFormatParser(d.date),
      day: d.date,
      country: d.country,
      pagePath: d.pagePath,
      device: d.device,
      source: d.source,
      sessions: +d.sessions
    };
  }).then(myData => {
    data.update(v => myData)
  })
}

const dateFormatParser = timeParse("%Y%m%d");
