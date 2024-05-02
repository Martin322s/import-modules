const baseUrl = 'https://swapi.dev/api/people';

export const loadCharacters = () => fetch(baseUrl).then(res => res.json());