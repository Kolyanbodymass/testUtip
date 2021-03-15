const _apiBaseUrl = 'https://swapi.dev/api/';

const getPlanets = async () => {
    let res = await fetch(`${_apiBaseUrl}planets/`);

    return res.json();
}

export default getPlanets;

  