import { Component } from '@angular/core';
import { TableComponent } from '../../shared/UIElemnts/table/table.component';
import { HeaderComponent } from '../../shared/UIElemnts/header/header.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { selectOrderList } from '../../reducers/state/order.selector';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [TableComponent, HeaderComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  selectOrderList$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.selectOrderList$ = this.store.select(selectOrderList);
  }
}
