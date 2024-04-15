import { CounterListState } from './state/order.reducer';

export interface AppState {
  counterList: CounterListState;
}


export interface Item {
  userName: string;
  userId: number;
}
