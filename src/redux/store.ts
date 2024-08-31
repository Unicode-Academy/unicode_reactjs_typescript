import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counterSlice";
import { usersSlice } from "./slice/userSlice";
export type RootState = {
  counter: {
    value: number;
  };
  users: {
    user: object;
  };
};
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    users: usersSlice.reducer,
  },
});
