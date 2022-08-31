const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'football98.p.rapidapi.com'
	}
};

fetch('https://football98.p.rapidapi.com/premierleague/fixtures', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));