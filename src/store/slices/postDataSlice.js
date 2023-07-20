import {createSlice} from '@reduxjs/toolkit'
import {post} from '../actions/postServce'
const initialState = {
    loading:false,
    data:[],
    error:null,
}

// post response
const postDataSlice = createSlice({
    name:"postDataSlice",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
       
        builder.addCase(post.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
       
        builder.addCase(post.fulfilled, (state,action) =>{
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })

        builder.addCase(post.rejected, (state,action) =>{
            state.loading = false;
            state.error = action.payload;
        })
    }
    
})

export default postDataSlice.reducer