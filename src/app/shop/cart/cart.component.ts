import { Component, inject } from '@angular/core';
import { TableComponent } from '../../shared/UIElemnts/table/table.component';
import { HeaderComponent } from '../../shared/UIElemnts/header/header.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IOrder } from '../order.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [TableComponent, HeaderComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private store = inject(Store);
  order$?: Observable<IOrder[]>;

  constructor() {
    this.order$ = this.store.select('order');
  }
}
