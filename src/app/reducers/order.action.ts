import { createAction, props } from "@ngrx/store";
import { IOrder } from "../shop/order.model";

export const addItemToBasket = createAction(
  '[Cart Component] AddOrder',
  props<{ payload: IOrder[] }>()
);