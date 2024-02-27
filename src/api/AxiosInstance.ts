import axios from 'axios';
import { BACKEND_BASE_URL } from '../features/auth/constants';

function getCookie(name: string) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === name + '=') {
                cookieValue = decodeURIComponent(
                    cookie.substring(name.length + 1)
                );
                break;
            }
        }
    }
    return cookieValue;
}

const xsrfToken = getCookie('csrftoken');
// Create an axios instance
const axiosInstance = axios.create({
    baseURL: BACKEND_BASE_URL,
    withCredentials: true,
    headers: { 'X-CSRFToken': xsrfToken, 'Content-Type': 'application/json' },
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

/* // Function to retrieve the CSRF token
const getCsrfToken = () => {
    // Retrieve the CSRF token from wherever it's stored
    // For example, from Redux store, React context, or directly from a meta tag
    return document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute('content'); // Adjust this to actually retrieve the token
};

function getCsrfTokenFromCookie() {
    const value = `; ${document.cookie}`;
    const parts = value.split('; csrfToken=');
    if (parts.length === 2) {
        const csrfToken = parts.pop()?.split(';').shift();
        return csrfToken || null;
    }
    return null;
}
// Add a request interceptor to include the CSRF token in every request
axiosInstance.interceptors.request.use(
    (config) => {
        const csrfToken = getCsrfTokenFromCookie();
        if (csrfToken) {
            config.headers['X-CSRF-Token'] = csrfToken; // Adjust header name as needed
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
); */

export default axiosInstance;
