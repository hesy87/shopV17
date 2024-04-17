import { Component, Input, OnInit } from '@angular/core';
import { AppState, IOrder } from '../../../reducers';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { dicreaseQuantity, increaseQuantity, removeItem } from '../../../reducers/state/order.action';
import { Observable } from 'rxjs';
import { selectOrderList } from '../../../reducers/state/order.selector';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  selectOrderList$: Observable<any>;
  @Input() orderList!: IOrder[];

  constructor(
    private store: Store<AppState>,
  ) {
    this.selectOrderList$ = this.store.select(selectOrderList);
   }

  ngOnInit() {}

  removeItem(productID: number) {
    this.store.dispatch(removeItem({ productID }));
  }

  dicreaseQuantity(productID: number) {
    this.store.dispatch(dicreaseQuantity({ productID }));
  }

  increaseQuantity(productID: number) {
    this.store.dispatch(increaseQuantity({ productID }));
  }
}
