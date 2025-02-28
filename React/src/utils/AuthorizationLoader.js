import { redirect } from "react-router";
import { getToken } from "./LocalStorage";

export function AuthorizationLoader() {
  let token = getToken();
  console.log(token, "getsCalled");
  if (token === null) redirect("");
  else console.log("can navigate");
}
