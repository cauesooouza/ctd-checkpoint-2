import { API } from "./api.js";

export async function loginService(username, password) {
  try {
    const response = await API.post("/auth", {
      username: `${username}`,
      password: `${password}`,
    });
    
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
}