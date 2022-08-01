import {configureStore} from "@reduxjs/toolkit";
import reqDataSlice from "./reqDataSlice";

const store = configureStore({
    reducer:{
        reqData: reqDataSlice.reducer
    }
})

export default store;