import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const todoSlice = createSlice({
  name: "kkk",
  initialState,
  reducers: {
    add: (state, action) => {
      const { title, description } = action.payload;
      const todo = {
        id: nanoid(),
        title: title,
        description: description,
      };
      state.list.push(todo);
    },
    remove: (state, action) => {
      state.list = state.list.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

export const { add, remove } = todoSlice.actions;

export default todoSlice.reducer;
