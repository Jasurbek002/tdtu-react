import axios from 'axios';
const test_url = 'http://localhost:5000/v1';
const base_url = 'https://science.tdtu.uz/v1';
const token = localStorage.getItem('token');
axios.defaults.headers.token = token;
export default axios.create({
	baseURL: test_url,
});
