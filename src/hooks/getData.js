import axios  from "../utils/api/axios";
// api config
export async function getData(pathname){
     console.log(pathname)
     let res = await axios.get(pathname)
     return res.data
}