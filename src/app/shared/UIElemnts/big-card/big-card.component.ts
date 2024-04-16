import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { useHttp } from '../../../shop/http.service';
import { IProducts } from '../../../shop/order.model';
import { HeaderComponent } from '../header/header.component';
import { AppState, IOrder } from '../../../reducers';
import { Store } from '@ngrx/store';
import { addItem } from '../../../reducers/state/order.action';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
  providers: [useHttp],
})
export class BigCardComponent implements OnInit {
  url = 'products/';
  id = '';
  product!: IProducts;
  constructor(
    private route: ActivatedRoute,
    private http: useHttp,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.fetchData();
  }

  fetchData() {
    this.http
      .getData(this.url + this.id)
      .subscribe((res: any) => (this.product = res));
  }

  addItem(product:any) {
    this.store.dispatch(addItem({ product }));
  }
}
