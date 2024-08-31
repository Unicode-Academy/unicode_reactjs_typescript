import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
type State = {
  user: object;
};
export const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getUser.fulfilled,
      (state: State, action: { payload: object }) => {
        state.user = action.payload;
      }
    );
  },
});

export const getUser = createAsyncThunk(
  "users/getUser",
  async (userId: number, { rejectWithValue }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      return rejectWithValue("User not found");
    }
    return await response.json();
  }
);
