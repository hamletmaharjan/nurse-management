import {isEmpty} from '../utils/isEmpty';

/**
 * Function to get access token.
 * 
 * @returns {String}
 */
export const getAccessToken = () => {
  const token = localStorage.getItem("token");
  if(isEmpty(token)) {
    return "";
  }
  return 'Bearer '+ token;
};
  
/**
 * Function to get user object.
 * 
 * @returns {Object}
 */
export const getUserInfo = () => {
  const user = JSON.parse(localStorage.getItem('user')|| '{}');
  return user;
}

/**
 * Sets the access token on local storage.
 * 
 * @param {String} token 
 */
export const setAccessToken = (token: string) => {
  localStorage.setItem('token', token);
}

/**
 * Clears the local auth from storage.
 */
export const clearLocalAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
  