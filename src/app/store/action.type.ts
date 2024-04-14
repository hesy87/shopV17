import { createAction, props } from "@ngrx/store";
import { IOrder } from "../shop/order.model";

export const addItemToBasket = createAction(
  '[Basket Page] Add order',
  props<{ payload: IOrder[] }>()
);