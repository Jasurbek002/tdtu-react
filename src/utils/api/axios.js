import axios from "axios";
const token = localStorage.getItem('token')
axios.defaults.headers.token = token
export default axios.create({ 
    baseURL:process.env.API || 'http://34.204.6.47:5000/v1/',
});