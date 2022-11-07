import axios from "axios";
import { logout } from "./userActions";
import { URL } from "./../Url";
import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_EDIT_FAIL,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
} from "../Slice/ProductSlice";

export const listProducts = () => async (dispatch, getState) => {
  try {
    dispatch(PRODUCT_LIST_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${URL}/api/products/all`, config);

    dispatch(PRODUCT_LIST_SUCCESS(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch(PRODUCT_LIST_FAIL(message));
  }
};

// DELETE PRODUCT
export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch(PRODUCT_DELETE_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`${URL}/api/products/${id}`, config);

    dispatch(PRODUCT_DELETE_SUCCESS());
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch(PRODUCT_DELETE_FAIL(message));
  }
};

// CREATE PRODUCT
export const createProduct =
  (name, price, description, image, countInStock) =>
  async (dispatch, getState) => {
    try {
      dispatch(PRODUCT_CREATE_REQUEST());

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `${URL}/api/products/`,
        { name, price, description, image, countInStock },
        config
      );

      dispatch(PRODUCT_CREATE_SUCCESS(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch(PRODUCT_CREATE_FAIL(message));
    }
  };

// EDIT PRODUCT
export const editProduct = (id) => async (dispatch) => {
  try {
    dispatch(PRODUCT_EDIT_REQUEST());
    const { data } = await axios.get(`${URL}/api/products/${id}`);
    dispatch(PRODUCT_EDIT_SUCCESS(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch(PRODUCT_EDIT_FAIL(message));
  }
};

// UPDATE PRODUCT
export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch(PRODUCT_UPDATE_REQUEST());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `${URL}/api/products/${product._id}`,
      product,
      config
    );

    dispatch(PRODUCT_UPDATE_SUCCESS(data));
    dispatch(PRODUCT_EDIT_SUCCESS(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch(PRODUCT_UPDATE_FAIL(message));
  }
};
