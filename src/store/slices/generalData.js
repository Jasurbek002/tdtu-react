import { createSlice } from "@reduxjs/toolkit"
import {get} from './../actions/getServce'
const initialState = {
    loading:false,
    data:[],
    error:null,
}


// get response
const generalData = createSlice({
    name:"generalData",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {

       builder.addCase(get.pending,(state)=>{
        state.loading = true;
        state.error = null;
       });

       builder.addCase(get.fulfilled,(state,action) =>{
        state.loading = false;
        state.data = action.payload;
        state.error = null;
       });

       builder.addCase(get.rejected,(state,action) =>{
        state.loading = false;
        state.error = action.payload;
       });

    },
})

// export const dataSelector = (state) => state.generalData;

export default generalData.reducer