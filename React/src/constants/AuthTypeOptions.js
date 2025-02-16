export const AuthTypes = [
  {
    name: "Token-Based (JWT)",
    isDisabled: false,
    value: "JWT",
  },
  {
    name: "Session-Based (Cookies)",
    isDisabled: false,
    value: "SESSION",
  },
  {
    name: "OAuth/Social Login",
    isDisabled: false,
    value: "OAUTH",
  },
  {
    name: "Multi-Factor Authentication (MFA)",
    isDisabled: true,
    value: "MFA",
  },
  {
    name: "Passwordless Auth",
    isDisabled: true,
    value: "PASSWORDLESS",
  },
  {
    name: "Single Sign-On (SSO)",
    isDisabled: true,
    value: "SSO",
  },
];
