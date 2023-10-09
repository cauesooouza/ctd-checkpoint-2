import axios from "axios";

export const API = axios.create({
  baseURL: "https://dhodonto.ctd.academy/",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin': 'http://localhost:3000', 
  }
});