import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

axiosInstance.interceptors.request.use(request => {
    const token = JSON.parse(localStorage.getItem("token") as string);
    if (token) {
        request.headers.Authorization = `Bearer ${token.access_token}`;
    }
    return request;
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;