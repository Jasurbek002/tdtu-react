import axios from "../../utils/api/axios";

export async function getOneNews(id){ 
       const res = await axios.get(`news/${id}`)
       return res.data
}