import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import endpoint from "../../utils/endpoint";

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (state, { rejectWithValue }) => {
    try {
      return await client(`${endpoint.login}`, {
        body: state,
      });
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const slice = createSlice({
  name: "users",
  initialState: {
    username: "",
    email: "",
    token: "",
    id: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
    successMessage: "",
  },
  reducers: {},
  extraReducers: {},
});

const {} = slice.actions;

export default slice.reducer;
