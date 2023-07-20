import { createSlice } from "@reduxjs/toolkit"
import {deleteItem} from './../actions/deleteAction'
const initialState = {
    loading:false,
    data:{},
    error:null,
}


// get response
const deleteController = createSlice({
    name:"generalData",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {

       builder.addCase(deleteItem.pending,(state)=>{
        state.loading = true;
        state.error = null;
       });

       builder.addCase(deleteItem.fulfilled,(state,action) =>{
        state.loading = false;
        state.data = action.payload;
        state.error = null;
       });

       builder.addCase(deleteItem.rejected,(state,action) =>{
        state.loading = false;
        state.error = action.payload;
       });

    },
})

export default deleteController.reducer