import { createAction, props } from "@ngrx/store";
import { IOrder } from "../shop/order.model";

export const addItemToBasket = createAction(
  '[Cart Component] Add order',
  props<{ payload: IOrder[] }>()
);