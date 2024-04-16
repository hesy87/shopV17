import { IProducts } from '../shop/order.model';
import {  OrderListState } from './state/order.reducer';

export interface AppState {
  OrderList: OrderListState;
}

export interface IOrder extends IProducts {
  quantity: number;
}