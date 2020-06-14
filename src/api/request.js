import axios from "axios";
axios.defaults.withCredentials = true;

let url;
const switchApi = false;
if (switchApi) {
  url = "http://47.108.90.201:9091/renren-api";
} else {
  url = "/api";
}

const sever = axios.create({
  baseURL: url,
  timeout: 50000,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export default sever;
