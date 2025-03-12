import { FetchWrapper } from "./FetchWrapper";

export async function getRadomData() {
  let response = await FetchWrapper(
    `${import.meta.env.VITE_BASE_URL}/public/randomusers?page=1&limit=10`,
    { method: "get" }
  );
  return response;
}

export async function registerUser(email, password, role) {
  let userName = email.split("@")[0].toLowerCase();
  let object = {
    email: email,
    password: password,
    role: role,
    username: userName,
  };
  let response = await FetchWrapper(
    `${import.meta.env.VITE_BASE_URL}/users/register`,
    { method: "POST", body: JSON.stringify(object) }
  );
  return response;
}
export async function loginUser(email, password) {
  let object = {
    email: email,
    password: password,
  };
  let response = await FetchWrapper(
    `${import.meta.env.VITE_BASE_URL}/users/login`,
    {
      method: "POST",
      body: JSON.stringify(object),
    }
  );
  return response;
}

export async function currentUser(token) {
  let response = await FetchWrapper(
    `${import.meta.env.VITE_BASE_URL}/users/current-user`,
    { method: "GET" },
    token
  );
  return response;
}
