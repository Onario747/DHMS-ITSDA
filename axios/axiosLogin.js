import axios from "axios";

const loginApiClient = axios.create({
  baseURL: "https://itsa-hackathon.onrender.com/api", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor to store the token from the login response
loginApiClient.interceptors.response.use(
  (response) => {
    if (response.data && response.data.token) {
      localStorage.setItem("token", response.data.token);
      console.log("hello")
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
  
export default loginApiClient;
