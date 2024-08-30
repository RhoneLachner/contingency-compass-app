import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const fetchHelloWorld = async () => {
    try {
        const response = await axios.get(`${API_URL}hello/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
};