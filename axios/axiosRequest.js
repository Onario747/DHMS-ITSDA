import axios from "axios";

// Create an Axios instance for general API requests
const requestClient = axios.create({
  baseURL: "https://itsa-hackathon.onrender.com/api", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
});

// Request interceptor to add the token to the headers
requestClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default requestClient;

export const fetchData = async (endpoint) => {
  try {
    const response = await requestClient.get(endpoint);
    // Process the response data as needed
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error as needed
    throw error;
  }
};
