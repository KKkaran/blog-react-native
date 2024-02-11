import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import loginReducer from "../features/authentication/authSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        login: loginReducer
    }
}); 

//dispatcher reducer ko use krte hue store main changes krta hai.