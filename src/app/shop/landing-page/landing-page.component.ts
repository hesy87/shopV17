import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/UIElemnts/header/header.component';
import { CardComponent } from '../../shared/UIElemnts/card/card.component';
import { IProducts } from '../order.model';
import { useHttp } from '../http.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, CardComponent, NgFor,CartComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  providers: [useHttp],
})
export class LandingPageComponent implements OnInit {
  products: IProducts[] = [];
  getAllProductUrl = 'products';
  getProductsCategory = 'products/category/';
  url = ''

  constructor(private http: useHttp, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (param: any) => {
        this.url = param.category;
        this.fetchData()
      })
  }

  fetchData() {
    if (this.url === undefined) {
      this.http
        .getData(this.getAllProductUrl)
        .subscribe((res: any) => (this.products = res));
    } else {      
      this.http
        .getData(this.getProductsCategory + this.url)
        .subscribe((res: any) => (this.products = res));
    }
  }
}
