import axios  from "../../utils/api/axios";
// auth admin
export async function auth(body){
     const data = await axios.post('/login',body)
     return data
}