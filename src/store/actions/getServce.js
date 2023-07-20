import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../hooks/getData";

const get = createAsyncThunk('get', async (pathname, { rejectWithvalue }) => {
    try {
       const data = await getData(pathname)
       return data.data
    } catch (e) {
       if(e && e.message){
        return rejectWithvalue(e.message)
       }
    }
});

export {get}