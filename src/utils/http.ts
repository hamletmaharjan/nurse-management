import axios from 'axios';
// import * as authService from "../services/auth";

const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

const instance = axios.create({
  baseURL: baseURL,
  responseType: 'json',
});

export const get = (url: string, { params = {}, accessToken =  true, headers = {} } = {}) => {
  const authHeaders = {};
//   if (accessToken) {
//     authHeaders.Authorization = authService.getAccessToken();
//   }
  return instance({
    url,
    params,
    method: 'GET',
    headers: { ...authHeaders, ...headers },
  }).then((response) => response.data);
};


export const post = (url:string, { params = {}, body = {}, accessToken = true, headers = {} } = {}) => {
  const authHeaders = {};
//   if (accessToken) {
//     authHeaders.Authorization = authService.getAccessToken();
//   }
  return instance({
    url,
    params,
    data: body,
    method: 'POST',
    headers: { ...authHeaders, ...headers },
  }).then((response) => response.data);
};

export const put = (url: string, { params = {}, body = {}, accessToken = true, headers = {} } = {}) => {
  const authHeaders = {};
//   if (accessToken) {
//     authHeaders.Authorization = authService.getAccessToken();
//   }
  return instance({
    url,
    params,
    data: body,
    method: 'PUT',
    headers: { ...authHeaders, ...headers },
  }).then((response) => response.data);
};

export const remove = (url: string, { params = {}, accessToken = true, headers = {} } = {}) => {
  const authHeaders = {};
//   if (accessToken) {
//     authHeaders.Authorization = authService.getAccessToken();
//   }
  return instance({
    url,
    params,
    method: 'DELETE',
    headers: { ...authHeaders, ...headers },
  }).then((response) => response.data);
};
