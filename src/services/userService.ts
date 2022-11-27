import * as http from "../utils/http";
// import * as authService from "./auth";

export const signup = (payload:any) => {
  return http.post("auth/signup", { body: payload });
};

export const login = (payload:any) => {
  return http.post("auth/signin", { body: payload });
};

// export const validateToken = () => {
//   let user = authService.getUserInfo();
//   return http.get('/users/' + user.id);
// };
