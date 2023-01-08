import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticate: false,
  accessToken: "",
  refreshToken: "",
  timeOut: "",
};

export const detoritSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuth: (store, action) => {
      store.authenticate = action.payload.authenticate;
      store.accessToken = action.payload.accessToken;
      store.refreshToken = action.payload.refreshToken;
      store.timeOut = action.payload.timeOut;
    },
  },
});

export const { updateAuth } = detoritSlice.actions;

export default detoritSlice.reducer;
