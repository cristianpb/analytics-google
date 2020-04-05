function processCsv(text) {
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

export async function loadCsv() {
  const res = await fetch('__DATAURL__')
  const text = await res.text()
  return processCsv(text)
}

export async function fetchHistory() {
  const res = await fetch('https://api.github.com/repos/cristianpb/analytics-google/commits?sha=data')
  const commits = await res.json()
  const date = new Date();
  date.setDate(date.getDate() - 7);
  const commit = commits.find(item => {
    const dateCommit = new Date(item.commit.committer.date)
    if (dateCommit.getTime() < date.getTime()) {
      return item
    }
  })
  const lastWeek = await fetch(`https://raw.githubusercontent.com/cristianpb/analytics-google/${commit.sha}/data.csv`)
  const lastWeekText = await lastWeek.text()
  return processCsv(lastWeekText)
}
