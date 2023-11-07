import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getAllPackages = () => API.get('/package/getall');
export const getPackageById = (id) => API.get(`/package/get/:${id}`);
export const selectPackage = (data) => API.put(`/package/select`, data);

