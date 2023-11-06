import axios from "axios";
const token = localStorage.getItem("token");
axios.defaults.headers.token = token;
export default axios.create({
  baseURL: "https://api.devnugget.uz/v1",
});
