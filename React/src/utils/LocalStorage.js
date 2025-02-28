export function storeToken(accessToken) {
  localStorage.setItem("accessToken", accessToken);
  return { success: true };
}
export function getToken(tokenKey) {
  const key = "accessToken";
  return localStorage.getItem(key);
}
function deleteToken() {}
