import { ACTION_TYPES } from "../types/ActionTypes";

export const add_to_cart = (product) => {
  return { type: ACTION_TYPES.ADD_TO_CART, payload: product };
};

export const remove_to_cart = (id) => {
  return { type: ACTION_TYPES.REMOVE_FROM_CART, payload: id };
};
