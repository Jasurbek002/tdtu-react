import { createSlice } from "@reduxjs/toolkit"
import {login} from './../actions/authService'
const initialState = {
    loading:false,
    data:{
        token:"",
        role:null
    },
    error:null,
}


const authLogin = createSlice({
    name:"authLogin",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {

       builder.addCase(login.pending,(state)=>{
        state.loading = true;
        state.error = null;
       });

       builder.addCase(login.fulfilled,(state,{payload}) =>{
        state.loading = false;
        state.data.token = payload.data.token;
        state.data.role = payload.data.role;
        state.error = null;
       });

       builder.addCase(login.rejected,(state,action) =>{
        state.loading = false;
        state.error = action.payload;
       });

    },
})


export default authLogin.reducer