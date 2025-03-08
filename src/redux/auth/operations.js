import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://practice-authorization-in-node.vercel.app/";

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const { data } = await axios.post("auth/login", user, {
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.value);
  }
});
