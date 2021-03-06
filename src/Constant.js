export const APP_INFO = {
  name: "New Standard",
  version: "0.3.0",
  since: "2020",
  description: "Siam smile",
  contactUrl: "https://www.siamsmile.co.th",
};

export const CHECKVERSION_EVERY_MINUTE = 10

export const VERSIONCHECK_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "https://api.thanapoom.cc/api/ClientVersion/GetLastClientVersion" //dev
    : "https://api.thanapoom.cc/api/ClientVersion/GetLastClientVersion"; // Production

export const API_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "https://api.thanapoom.cc/api" //dev
    : "https://api.thanapoom.cc/api"; // Production

export const SSO_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    // ? "https://auth.thanapoom.cc" //dev
    ? "http://localhost:3000" //dev
    : "https://auth.thanapoom.cc"; // Production

export const SSO_URL_Changepassword =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    // ? "https://auth.thanapoom.cc/#/logout" //dev
    ? "http://localhost:3000/#/changepassword" //dev
    : "https://auth.thanapoom.cc/#/changepassword"; // Production

export const ROLES = {
  user: "User",
  Manager: "Manager",
  admin: "Admin",
  developer: "Developer",
};
