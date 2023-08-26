import { configureStore } from "@reduxjs/toolkit";
import formFieldsReducer from "./formFieldsSlice";
const store = configureStore({
    reducer: {
        formFields: formFieldsReducer,
    }
});

export default store;