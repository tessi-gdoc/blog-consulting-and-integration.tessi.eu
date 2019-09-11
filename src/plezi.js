import axios from 'axios';
import { isNotNil } from './utils';

const baseURL = process.env.GATSBY_PLEZI_API_URL,
  apiKey = process.env.GATSBY_PLEZI_API_KEY,
  tenant = process.env.GATSBY_PLEZI_TENANT;

/**
 *
 * Initialize axios library with Cancel Token
 * @param {string} url
 * @param {object} [options={}]
 * @returns AxiosPromise
 */
export const fetch = (url, options = {}) => {
  return axios({
    baseURL,
    url,
    timeout: 20000,
    ...options
  });
};

/**
 *
 *
 * @param {string} method (GET, POST, PUT...)
 * @param {any} data
 * @param {string} [jwt=null]
 * @returns axios options
 */
export const getInit = (method, data) => {
  return {
    method,
    withCredentials: true,
    crossDomain: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache',
      'X-Tenant-Company': tenant,
      'X-API-Key': apiKey
    },
    ...(isNotNil(data) ? { data } : {})
  };
};

const createContact = data => fetch(`/contacts`, getInit(`POST`, data));

export default createContact;
