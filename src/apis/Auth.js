import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const signUp = (userData) => API.post('/auth/register', userData);
export const logIn= (credentials)=> API.post('/auth/login',credentials);

export const getHealthData= (userId)=> API.get(`/health/data/${userId}`);
