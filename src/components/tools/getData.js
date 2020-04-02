export async function loadCsv() {
  const res = await fetch('__DATAURL__')
  const text = await res.text()
  const rows = text.split('\n').map(str => str.split(','))
  const headers = rows.shift();
  return rows
    .filter(row => row.length === headers.length)
    .map(row => {
      return {
        country: row[0] === '(not set)' ? '': row[0],
        countryIsoCode: row[1],
        city: row[2] === '(not set)' ? '': row[2],
        day: row[3],
        dd: new Date(row[3].substring(0,4), row[3].substring(4,6) - 1, row[3].substring(6,8)),
        device: row[4],
        source: row[5],
        pagePath: row[6],
        sessions: +row[7]
      };
    });
}
