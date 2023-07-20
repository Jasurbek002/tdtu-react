import { configureStore,combineReducers} from "@reduxjs/toolkit";
import generalData from "./slices/generalData";
import authSlice from "./slices/authSlice";
import postReduser from './slices/postDataSlice'
import deleteSlice from "./slices/deleteSlice";
import getOneNews from "./slices/oneNewsSlice";

const rootReduser = combineReducers({
    general:generalData,
    post:postReduser,
    delete:deleteSlice,
    auth:authSlice,
    oneNews:getOneNews,
})

const store = configureStore({
    reducer:rootReduser,
    devTools: true,
})

export default store