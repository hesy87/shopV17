import { IProducts } from '../core/modules/order.model';
import { OrderListState } from './state/order.reducer';

export interface AppState {
  OrderList: OrderListState;
}

export interface IOrder extends IProducts {
  quantity: number;
}
