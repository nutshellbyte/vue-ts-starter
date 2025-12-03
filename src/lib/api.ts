import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.BASE_URL,
    timeout: 10000,
});

api.interceptors.request.use(
    (config) => {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        config.headers['time-zone'] = timezone;
        const user = JSON.parse(localStorage.getItem('user') as string);
        if (user?.access_token) config.headers.Authorization = `Bearer ${user.access_token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        return Promise.reject(error);
    }
);
