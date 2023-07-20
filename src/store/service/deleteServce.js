import axios from "../../utils/api/axios";

export async function deleteData({path,id,data}){ 
       const res = await axios.delete(`${path}/${id}`,{data:data})
       return res.data
}