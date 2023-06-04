import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
 const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2M5ZjM0NWU4ZThkOGM0MGEwYmE1MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTkxNTMwNywiZXhwIjoxNjg2MDAxNzA3fQ.si-AyKrY7vxI52QA8VLORKUx3CutTtGg81WKrbgkzDw"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
//const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});