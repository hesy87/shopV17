import { createAction, props } from '@ngrx/store';
import { Item } from '../index';

export const addItem = createAction(
  '[CounterList Component] AddItem',
  props<{ item: Item }>()
);
export const removeItem = createAction(
  '[CounterList Component] RemoveItem',
  props<{ userId: number }>()
);
export const resetItem = createAction('[CounterList Component] ResetItem');
