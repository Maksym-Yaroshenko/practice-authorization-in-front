import { createSlice } from "@reduxjs/toolkit";
import { login } from "./operations";

const initialState = {
  // user: { login: "" },
  user: null,
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.data;
        console.log(action.payload.data.accessToken);
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action);
      });
  },
});

export default authSlice.reducer;
