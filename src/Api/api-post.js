import axios from "axios";

export const APIPOST = axios.create({
  baseURL: "http://dhodonto.ctd.academy/",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json', 
    'Accept': '*/*', 
  }
});