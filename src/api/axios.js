import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://sima.adh-monitoring.com/api',
    headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});

export default axiosApi;
