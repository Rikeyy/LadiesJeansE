import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://lje-ms-backend.onrender.com'
});

export default {
    login(credentials) {
        return apiClient.post('/login', credentials);
    }
};