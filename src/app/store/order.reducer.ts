import { createReducer, on } from "@ngrx/store";
import { addItemToBasket } from "./order.action";
import { IOrder } from "../shop/order.model";

export const initialState: { items: IOrder[] } = {
  items: [],
};

export const orderReducer = createReducer(
  initialState,

  on(addItemToBasket, (state, { payload }) => ({
    ...state,
    items: [...state.items, ...payload],
  }))
);