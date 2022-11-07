import { createSlice } from "@reduxjs/toolkit";
export const orderListSlice = createSlice({
  name: "orderList",
  initialState: { orders: [] },
  reducers: {
    ORDER_LIST_REQUEST: () => ({ loading: true }),
    ORDER_LIST_SUCCESS: (state, action) => {
      return { loading: false, orders: action.payload };
    },
    ORDER_LIST_FAIL: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS } =
  orderListSlice.actions;
export const orderDeliveredSlice = createSlice({
  name: "orderDelivered",
  initialState: {},
  reducers: {
    ORDER_DELIVERED_REQUEST: () => ({ loading: true }),
    ORDER_DELIVERED_SUCCESS: (state, action) => {
      return { loading: false, success: true };
    },
    ORDER_DELIVERED_FAIL: (state, action) => {
      return { loading: false, error: action.payload };
    },
    ORDER_DELIVERED_RESET: (state, action) => {
      return {};
    },
  },
});
export const {
  ORDER_DELIVERED_FAIL,
  ORDER_DELIVERED_REQUEST,
  ORDER_DELIVERED_RESET,
  ORDER_DELIVERED_SUCCESS,
} = orderDeliveredSlice.actions;
export const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: { loading: true, orderItems: [], shippingAddress: {} },
  reducers: {
    ORDER_DETAILS_REQUEST: (state, action) => {
      return { ...state, loading: true };
    },
    ORDER_DETAILS_SUCCESS: (state, action) => {
      return { loading: false, order: action.payload };
    },
    ORDER_DETAILS_FAIL: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});
export const {
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_REQUEST,
} = orderDetailsSlice.actions;
export const orderListReducer = orderListSlice.reducer;
export const orderDeliveredReducer = orderDeliveredSlice.reducer;
export const orderDetailsReducer = orderDetailsSlice.reducer;
