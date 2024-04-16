import { createSelector } from '@ngrx/store';
import { AppState } from '../index';


export const selectOrderState = (state: AppState) => state.OrderList;

export const selectOrderList = createSelector(
  selectOrderState,
  (state) => state.list
);
