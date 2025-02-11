const BASE_API = "https://api.freeapi.app/api/v1";
export const userRegisterApi = () => {
  return `${BASE_API}/users/register`;
};
export const userLoginApi = () => {
  return `${BASE_API}/users/login`;
};

export const testApi = (page, limit) => {
  return `${BASE_API}/public/randomusers?page=${page}&limit=${limit}`;
};
