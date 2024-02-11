import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
}); 

//dispatcher reducer ko use krte hue store main changes krta hai.