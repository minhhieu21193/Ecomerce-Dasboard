import { configureStore } from "@reduxjs/toolkit";
import {
  orderDeliveredReducer,
  orderDetailsReducer,
  orderListReducer,
} from "./Slice/OrderSlice";
import {
  productCreateReducer,
  productDeleteReducer,
  productEditReducer,
  productListReducer,
  productUpdateReducer,
} from "./Slice/ProductSlice";
import { userListReducer, userLoginReducer } from "./Slice/UserSlice";

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userList: userListReducer,
    productList: productListReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productEdit: productEditReducer,
    productUpdate: productUpdateReducer,
    orderList: orderListReducer,
    orderDetails: orderDetailsReducer,
    orderDeliver: orderDeliveredReducer,
  },
  preloadedState: initialState,
});

export default store;
