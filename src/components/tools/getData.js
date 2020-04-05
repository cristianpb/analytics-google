function processCsv(text) {
  const rows = text.split('\n').map(str => str.split(','))
  const headers = rows.shift();
  return rows
    .filter(row => row.length === headers.length)
    .map(row => {
      let readRow = {}
      headers.forEach((key, idx) => readRow[key] = row[idx]) 
      return {
        userType: readRow.userType,
        source: readRow.source,
        pagePath: readRow.pagePath,
        device: readRow.deviceCategory,
        country: readRow.country === '(not set)' ? '' : readRow.country,
        city: readRow.city === '(not set)' ? '': readRow.city,
        users: +readRow.users,
        sessions: +readRow.sessions,
        sessionDuration: +readRow.sessionDuration,
        timeOnPage: +readRow.timeOnPage,
        pageLoadTime: +readRow.pageLoadTime,
        bounces: +readRow.bounces,
        day: readRow.date,
        hour: +readRow.hour,
        countryIsoCode: readRow.countryIsoCode,
        dd: new Date(readRow.date.substring(0,4), readRow.date.substring(4,6) - 1, readRow.date.substring(6,8))
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
