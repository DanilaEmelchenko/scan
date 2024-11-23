import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  isAuth: boolean;
}

const initialState: IAuthState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin: (state) => {
      state.isAuth = true;
    },
    authLogout: (state) => {
      state.isAuth = false;
    },
  },
});

export const { authLogin, authLogout } = authSlice.actions;

export default authSlice.reducer;
