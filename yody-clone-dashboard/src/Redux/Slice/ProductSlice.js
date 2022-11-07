import { createSlice } from "@reduxjs/toolkit";

export const productListSlice = createSlice({
  name: "productList",
  initialState: { products: [] },
  reducers: {
    PRODUCT_LIST_REQUEST: (state, action) => {
      return { loading: true, products: [] };
    },
    PRODUCT_LIST_SUCCESS: (state, action) => {
      return { loading: false, products: action.payload };
    },
    PRODUCT_LIST_FAIL: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});
export const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS } =
  productListSlice.actions;
export const productDeleteSlice = createSlice({
  name: "productDelete",
  initialState: {},
  reducers: {
    PRODUCT_DELETE_REQUEST: (state, action) => {
      return { loading: true };
    },
    PRODUCT_DELETE_SUCCESS: (state, action) => {
      return { loading: false, success: true };
    },
    PRODUCT_DELETE_FAIL: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});
export const {
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_SUCCESS,
} = productDeleteSlice.actions;
export const productCreateSlice = createSlice({
  name: "productCreate",
  initialState: {},
  reducers: {
    PRODUCT_CREATE_REQUEST: (state, action) => {
      return { loading: true };
    },
    PRODUCT_CREATE_SUCCESS: (state, action) => {
      return { loading: false, success: true, product: action.payload };
    },
    PRODUCT_CREATE_FAIL: (state, action) => {
      return { loading: false, error: action.payload };
    },
    PRODUCT_CREATE_RESET: (state, action) => {
      return {};
    },
  },
});
export const {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_RESET,
} = productCreateSlice.actions;
export const productUpdateSlice = createSlice({
  name: "productUpdate",
  initialState: { product: {} },
  reducers: {
    PRODUCT_UPDATE_REQUEST: (state, action) => {
      return { loading: true };
    },
    PRODUCT_UPDATE_SUCCESS: (state, action) => {
      return { loading: false, success: true, product: action.payload };
    },
    PRODUCT_UPDATE_FAIL: (state, action) => {
      return { loading: false, error: action.payload };
    },
    PRODUCT_UPDATE_RESET: (state, action) => {
      return { product: {} };
    },
  },
});
export const {
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_RESET,
} = productUpdateSlice.actions;
export const productEditSlice = createSlice({
  name: "productEdit",
  initialState: { product: { reviews: [] } },
  reducers: {
    PRODUCT_EDIT_REQUEST: (state, action) => {
      return { ...state, loading: true };
    },
    PRODUCT_EDIT_SUCCESS: (state, action) => {
      return { loading: false, product: action.payload };
    },
    PRODUCT_EDIT_FAIL: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});
export const productEditReducer = productEditSlice.reducer;
export const productUpdateReducer = productUpdateSlice.reducer;
export const productDeleteReducer = productDeleteSlice.reducer;
export const productCreateReducer = productCreateSlice.reducer;
export const productListReducer = productListSlice.reducer;

export const { PRODUCT_EDIT_REQUEST, PRODUCT_EDIT_FAIL, PRODUCT_EDIT_SUCCESS } =
  productEditSlice.actions;
