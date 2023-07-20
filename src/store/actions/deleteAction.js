import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteData } from "../service/deleteServce";

const deleteItem = createAsyncThunk('get', async (props, { rejectWithvalue }) => {
    try {
      console.log(props);
       const data = await deleteData(props)
       console.log(data)
       return data.data
    } catch (e) {
      console.log(e)
       if(e && e.message){
        return rejectWithvalue(e.message)
       }
    }
});

export {deleteItem}