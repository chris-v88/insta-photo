import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

if (!apiUrl) {
  throw new Error(
    'REACT_APP_API_URL environment variable is not set. Please configure it in your .env file.'
  );
}
export const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true, // Include cookies in requests
});
