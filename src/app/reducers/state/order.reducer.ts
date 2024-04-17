import { createReducer, on } from '@ngrx/store';
import { addItem, dicreaseQuantity, increaseQuantity, removeItem } from './order.action';
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

  on(increaseQuantity, (state, { productID }) => {
    const updatedList = state.list.map((item) => {
      if (item.id === productID) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    return { ...state, list: updatedList };
  }),

  on(dicreaseQuantity, (state, { productID }) => {
    const updatedList = state.list.map((item) => {
      if (item.id === productID) {
        // Increase the quantity of the matched product
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    return { ...state, list: updatedList };
  }),

);
