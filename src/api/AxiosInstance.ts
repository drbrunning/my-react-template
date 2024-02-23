import axios from 'axios';
import { BACKEND_BASE_URL } from '../features/auth/constants';

// Create an axios instance
const axiosInstance = axios.create({
    baseURL: BACKEND_BASE_URL,
    withCredentials: true
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            // Token is invalid or expired
            window.location.href = '/login'; // Redirect to login page
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
