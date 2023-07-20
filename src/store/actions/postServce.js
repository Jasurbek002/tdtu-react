import {createAsyncThunk} from '@reduxjs/toolkit'
import postData from '../../hooks/postData';

const post = createAsyncThunk(
    'post',
    async (props,{rejectWithValue}) =>{
      console.log(props)
       try {
         let res = await postData(props)
         console.log(res);
         return res.data
       } catch (e) {
           rejectWithValue(e.message)
       }
    });

export {post}