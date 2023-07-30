function processCsv(text) {
	const rows = text.split('\n').map((str) => str.split(','));
	const headers = rows.shift();
	return rows
		.filter((row) => row.length === headers.length)
		.map((row) => {
			let readRow = {};
			headers.forEach((key, idx) => (readRow[key] = row[idx]));
			return {
				userType: readRow.userType,
				pageReferrer: readRow.pageReferrer,
				pagePath: readRow.pagePath,
				device: readRow.deviceCategory
					? readRow.deviceCategory
					: readRow.device
					? readRow.device
					: 'not available',
				country: readRow.country === '(not set)' ? '' : readRow.country,
				city: readRow.city === '(not set)' ? '' : readRow.city,
				totalUsers: +readRow.totalUsers,
				sessions: +readRow.sessions,
				sessionDuration: +readRow.sessionDuration,
				timeOnPage: +readRow.timeOnPage,
				pageLoadTime: +readRow.pageLoadTime,
				bounces: +readRow.bounces,
				day: readRow.date,
				hour: +readRow.hour,
				countryIsoCode: readRow.countryIsoCode,
				dd: new Date(
					readRow.date.substring(0, 4),
					readRow.date.substring(4, 6) - 1,
					readRow.date.substring(6, 8)
				)
			};
		});
}

export const loadCsv = async (dataUrl) => {
	const res = await fetch(dataUrl);
	const text = await res.text();
	return await processCsv(text);
};

export const fetchHistory = async (idx) => {
	let dataUrl;
	if (idx == 0) {
		dataUrl = import.meta.env.DEV
			? 'data/data.csv'
			: 'https://raw.githubusercontent.com/cristianpb/analytics-google/data/data.csv';
	} else if (import.meta.env.DEV) {
		dataUrl = 'data/dataLastWeek.csv';
	} else {
		const url = 'https://api.github.com/repos/cristianpb/analytics-google/commits?sha=data';
		const res = await fetch(url);
		const commits = await res.json();
		dataUrl = `https://raw.githubusercontent.com/cristianpb/analytics-google/${commits[idx].sha}/data.csv`;
	}
	console.log('idx', idx, 'data Url', dataUrl);
	return await loadCsv(dataUrl);
};

function processGithubCsv(text) {
	const rows = text.split('\n').map((str) => str.split(','));
	const headers = rows.shift();
	return rows
		.filter((row) => row.length === headers.length)
		.map((row) => {
			let readRow = {};
			headers.forEach((key, idx) => (readRow[key] = row[idx]));
			return {
				date: readRow.date,
				repository: readRow.repository,
				dd: new Date(
					readRow.date.substring(0, 4),
					readRow.date.substring(5, 7) - 1,
					readRow.date.substring(8, 10)
				),
				clones: +readRow.clones,
				views: +readRow.views
			};
		})
		.sort((a, b) => b.dd - a.dd);
}

export async function fetchGithub() {
	const url = import.meta.env.DEV
		? 'data/github-visits.csv'
		: 'https://cristianpb.github.io/stats/github-visits.csv';
	const res = await fetch(url);
	const text = await res.text();
	return processGithubCsv(text);
}

export async function fetchJekyll() {
	const url = import.meta.env.DEV
		? 'data/github-pages.json'
		: 'https://cristianpb.github.io/api/github-pages.json';
	const res = await fetch(url);
	if (res) {
		return await res.json();
	} else {
		return [];
	}
}
