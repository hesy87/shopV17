import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, resetItem } from './order.action';
import { IOrder } from '../index';

export const initialState = [];

export interface OrderListState {
  list: Array<IOrder>;
}

export const initialOrderState: OrderListState = {
  list: [],
};

export const OrderListReducer = createReducer(
  initialOrderState,

  on(addItem, (state, { product }) => {
    const orderProduct: IOrder = {
      ...product,
      quantity: 1,
    };
    const list = [...state.list, orderProduct];
    return { ...state, list };
  }),

  on(removeItem, (state, { productID }) => {
    const list = state.list.filter((item) => item.id !== productID);
    return { ...state, list };
  }),

  on(resetItem, (state) => ({ ...state, list: [] }))
);
