import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOneNews } from "../service/getOneNews";

const getOne = createAsyncThunk('get', async (id, { rejectWithvalue }) => {
    try {
       const data = await getOneNews(id)
       return data.data
    } catch (e) {
       if(e && e.message){
        return rejectWithvalue(e.message)
       }
    }
});

export {getOne}