import {
    userLoginApi,
    userRegisterApi,
    testApi,
  } from "../constants/APIconstant";
  
  export async function testFunction() {
    const response = await fetch(testApi(1, 10));
    let data = await response.json();
    console.log(data.data.data);
  }
  
  export async function signUpAuthService() {
    const response = await fetch(userRegisterApi(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8 ",
      },
      body: JSON.stringify({
        email: "user.emasadsfsfsdail@domain.com",
        password: "test@123",
        role: "ADMIN",
        username: "doejasdasdaasdohn",
      }),
    });
    console.log(response);
  }
  
  export const loginAuthService = () => {};
  