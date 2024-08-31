import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type State = {
  value: number;
};
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state: State, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state: State, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
