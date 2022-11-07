import { createSlice } from "@reduxjs/toolkit";

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {},
  reducers: {
    USER_LOGIN_REQUEST: (state, action) => {
      return { loading: true };
    },
    USER_LOGIN_SUCCESS: (state, action) => {
      return { loading: false, userInfo: action.payload };
    },
    USER_LOGIN_FAIL: (state, action) => {
      return { loading: false, error: action.payload };
    },
    USER_LOGOUT: (state, action) => {
      return {};
    },
  },
});

export const {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} = userLoginSlice.actions;
export const userListSlice = createSlice({
  name: "userList",
  initialState: { users: [] },
  reducers: {
    USER_LIST_REQUEST: (state, action) => {
      return { loading: true };
    },
    USER_LIST_SUCCESS: (state, action) => {
      return { loading: false, users: action.payload };
    },
    USER_LIST_FAIL: (state, action) => {
      return { loading: false, error: action.payload };
    },
    USER_LIST_RESET: (state, action) => {
      return { users: [] };
    },
  },
});
export const {
  USER_LIST_REQUEST,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_RESET,
} = userListSlice.actions;
export const userLoginReducer = userLoginSlice.reducer;
export const userListReducer = userListSlice.reducer;
