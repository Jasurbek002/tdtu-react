import { createSlice } from "@reduxjs/toolkit"
import {getOne} from './../actions/oneNews'
const initialState = {
    loading:false,
    data:{},
    error:null,
}


// get one News response
const getOneNews = createSlice({
    name:"generalData",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {

       builder.addCase(getOne.pending,(state)=>{
        state.loading = true;
        state.error = null;
       });

       builder.addCase(getOne.fulfilled,(state,action) =>{
        state.loading = false;
        state.data = action.payload;
        state.error = null;
       });

       builder.addCase(getOne.rejected,(state,action) =>{
        state.loading = false;
        state.error = action.payload;
       });

    },
})

// export const dataSelector = (state) => state.generalData;

export default getOneNews.reducer