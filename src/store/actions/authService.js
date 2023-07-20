import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../service/auth";

const login = createAsyncThunk('login/admin', async (body, { rejectWithvalue }) => {
    try {
       const data = await auth(body)
       return data.data
    } catch (e) {
       if(e && e.message){
        return rejectWithvalue(e.message)
       }
    }
});

export {login}