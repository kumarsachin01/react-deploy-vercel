import * as actionTypes from "../constants/cartConstants";
import axios from "axios";
import { BACKEND_URL } from "../../environment"

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${BACKEND_URL}api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      title: data.title,
      imgsrc: data.imgsrc,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
