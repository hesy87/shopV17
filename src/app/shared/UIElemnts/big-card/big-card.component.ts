import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { useHttp } from '../../../shop/http.service';
import { IProducts } from '../../../shop/order.model';
import { HeaderComponent } from '../header/header.component';

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
  constructor(private route: ActivatedRoute, private http: useHttp) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.fetchData()
  }

  fetchData() {
    this.http
      .getData(this.url + this.id)
      .subscribe((res: any) => (this.product = res));
  }
}
