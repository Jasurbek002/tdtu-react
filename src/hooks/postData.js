import axios from "../utils/api/axios"
export default async function postData({pathname,data}){
    let res = await axios.post(pathname,data)
    console.log(res.data)
    return res.data
}