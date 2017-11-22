import {getBackEndUrl} from './environmentConfig';

export function get(url, {headers, authorized} = {}) {
  const baseUrl = getBackEndUrl();

  const params = {
    method: 'GET',
    headers: headers || {},
    mode: 'cors',
    cache: 'default'
  };

  if (authorized) {
    const accessToken = localStorage.getItem('access_token');
    params.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return fetch(`${baseUrl}${url}`, params);
}

export function post(url, {body, authorized}) {
  const baseUrl = getBackEndUrl();

  const params = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
  };

  if (authorized) {
    const accessToken = localStorage.getItem('access_token');
    params.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return fetch(`${baseUrl}${url}`, params);
}

export function postFile(url, {body, authorized}) {
  const baseUrl = getBackEndUrl();

  const params = {
    method: 'POST',
    body,
    headers: {
      // 'Accept': 'application/json',
      'Access-Control-Allow-Origin': getBackEndUrl(),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    mode: 'cors',
    cache: 'default'
  };

  if (authorized) {
    const accessToken = localStorage.getItem('access_token');
    params.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return fetch(`${baseUrl}${url}`, params);
}

export function del(url, {body, authorized}) {
  const baseUrl = getBackEndUrl();

  const params = {
    method: 'DELETE',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
  };

  if (authorized) {
    const accessToken = localStorage.getItem('access_token');
    params.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return fetch(`${baseUrl}${url}`, params);
}

export default {
  get,
  post,
  del
};
