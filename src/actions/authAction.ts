
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(auth:any) {
  return {
    type:LOGIN,
    payload: {
      id: auth.id,
      email: auth.email,
      token: auth.token
    }
  };
}

export function logout() {
  return {
    type:LOGOUT
  };
}

