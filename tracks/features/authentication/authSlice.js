import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedUser: {},
};

export const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, username } = action.payload;
      state.loggedUser = { email, username };
    },
    logout: (state, action) => {
      state.loggedUser = {};
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
