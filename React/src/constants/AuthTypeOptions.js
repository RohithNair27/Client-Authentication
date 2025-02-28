export const AuthTypes = [
  {
    key: 1,
    name: "Token-Based (JWT)",
    isDisabled: false,
    value: "JWT",
  },
  {
    key: 2,
    name: "Session-Based (Cookies)",
    isDisabled: false,
    value: "SESSION",
  },
  {
    key: 3,
    name: "OAuth/Social Login",
    isDisabled: false,
    value: "OAUTH",
  },
  {
    key: 4,
    name: "Multi-Factor Authentication (MFA)",
    isDisabled: true,
    value: "MFA",
  },
  {
    key: 5,
    name: "Passwordless Auth",
    isDisabled: true,
    value: "PASSWORDLESS",
  },
  {
    key: 6,
    name: "Single Sign-On (SSO)",
    isDisabled: true,
    value: "SSO",
  },
];
