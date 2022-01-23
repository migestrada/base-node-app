const headers = {
  'Content-Type': 'application/json',
  'ACCEPT': 'application/json'
};

const apiUrl = `${process.env.API_HOST}/api/`;
const noApiUrl = process.env.API_HOST;

const getUrl = (noApi, path) => `${noApi ? noApiUrl : apiUrl}${path}`;

const options = (method, body = undefined) => ({
  method: method || 'GET', // *GET, POST, PUT, DELETE, etc.
  mode: 'same-origin', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers,
  body: JSON.stringify(body),
});

export const get = (path, body = undefined, noApi = false) => fetch(getUrl(noApi, path), options('GET'));

export const post = (path, body = undefined, noApi = false) => fetch(getUrl(noApi, path), options('POST', body));

export const del = (path, body = undefined, noApi = false) => fetch(getUrl(noApi, path), options('DELETE', body));
