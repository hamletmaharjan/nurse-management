import * as http from "../utils/http";

/**
 * Signup for new user.
 * 
 * @param payload 
 * @returns {Promise}
 */
export const signup = (payload:any) => {
  return http.post("auth/signup", { body: payload });
};

/**
 * Login exising user.
 * 
 * @param payload 
 * @returns {Promise}
 */
export const login = (payload:any) => {
  return http.post("auth/signin", { body: payload });
};

// export const validateToken = () => {
//   let user = authService.getUserInfo();
//   return http.get('/users/' + user.id);
// };
