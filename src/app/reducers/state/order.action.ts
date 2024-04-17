import { createAction, props } from '@ngrx/store';
import { IProducts } from '../../shop/order.model';

export const addItem = createAction(
  '[CounterList Component] AddItem',
  props<{ product: IProducts }>()
);
export const removeItem = createAction(
  '[CounterList Component] RemoveItem',
  props<{ productID: number }>()
);
export const increaseQuantity = createAction(
  '[CounterList Component] increaseQuantity',
  props<{ productID: number }>()
);
export const dicreaseQuantity = createAction(
  '[CounterList Component] dicreaseQuantity',
  props<{ productID: number }>()
);
