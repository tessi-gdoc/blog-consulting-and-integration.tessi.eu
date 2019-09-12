import axios from 'axios';
import { isNotNil, str } from '../utils';
import config from '../../config';

/**
 *
 * Initialize axios library with Cancel Token
 * @param {string} url
 * @param {object} [options={}]
 * @returns AxiosPromise
 */
export const fetch = (url, options = {}) => {
  return axios({
    baseURL: process.env.GATSBY_PLEZI_API_URL || config.GATSBY_PLEZI_API_URL,
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
 * @returns axios options
 */
export const getInit = (method, data) => {
  return {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'X-Tenant-Company':
        process.env.GATSBY_PLEZI_TENANT || config.GATSBY_PLEZI_TENANT,
      'X-API-Key':
        process.env.GATSBY_PLEZI_API_KEY || config.GATSBY_PLEZI_API_KEY
    },
    ...(isNotNil(data) ? { data } : {})
  };
};

exports.handler = e => {
  const { email, visitor } = e.queryStringParameters;
  const formId =
    process.env.GATSBY_PLEZI_FORM_ID || config.GATSBY_PLEZI_FORM_ID;
  const webformId =
    process.env.GATSBY_PLEZI_CONTENT_WEBFORM_ID ||
    config.GATSBY_PLEZI_CONTENT_WEBFORM_ID;
  return fetch(
    `/create_contact_after_webform?form_id=${formId}&content_web_form_id=${webformId}&email=${email}&visitor=${visitor}`,
    getInit(`GET`)
  )
    .then(res => ({
      statusCode: 200,
      body: str(res.data)
    }))
    .catch(error => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`
    }));
};
