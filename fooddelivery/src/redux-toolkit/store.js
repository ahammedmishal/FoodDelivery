import { configureStore } from "@reduxjs/toolkit";
import GeneralSlice from "./GeneralSlice";

const store = configureStore({
    reducer: {
        value: GeneralSlice
    }
});

export default store;