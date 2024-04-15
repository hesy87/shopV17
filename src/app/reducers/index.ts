import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { orderReducer } from './order.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  order: orderReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
