import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
});

const { userLoggedout } = slice.actions;

export default slice.reducer;
