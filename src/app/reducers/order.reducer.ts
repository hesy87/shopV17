import { createReducer, on } from "@ngrx/store";
import { addItemToBasket } from "./order.action";
import { IOrder } from "../shop/order.model";

export const initialState: { items: IOrder[] } = {
  items: [
    {
      title: 'hesam',
      quantity: 2,
    },
  ],
};

export const orderReducer = createReducer(
  initialState,

  on(addItemToBasket, (state, { payload }) => ({
    ...state,
    items: [...state.items, ...payload],
  }))
);