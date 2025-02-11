import { passwordRegex,emailRegex } from "../constants/RegexConstant";

export function checkEmailRegex(email){
    return emailRegex.test(email);
}

export function checkPasswordRegex(password){
    return passwordRegex.test(password);
}