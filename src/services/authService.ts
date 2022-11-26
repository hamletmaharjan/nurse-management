export const getAccessToken = () => {
  const token = localStorage.getItem("token");
  return token;
};
  
export const getUserInfo = () => {
  const user = JSON.parse(localStorage.getItem('user')|| '');
  return user;
}

export const setAccessToken = (token: string) => {
  localStorage.setItem('token', token);
}

export const clearLocalAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
  