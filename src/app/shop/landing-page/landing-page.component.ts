import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../shared/UIElemnts/header/header.component';
import { CardComponent } from '../../shared/UIElemnts/card/card.component';
import { IProducts } from '../../core/modules/order.model';
import { useHttp } from '../../core/services/http.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, CardComponent, RouterOutlet],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export default class LandingPageComponent {
  products: IProducts[] = [];
  getAllProductUrl = 'products';
  getProductsCategory = 'products/category/';
  url = '';
  @Input() set HeaderCategory(value: any) {
    this.fetchData(value);
  }

  constructor(private http: useHttp, private route: Router) {}

  navigate(productId:any) {
    this.route.navigate([`products/${productId.id}`]);
  }

  fetchData(value: any) {
    if (value === undefined) {
      this.http
        .getData(this.getAllProductUrl)
        .subscribe((res: any) => (this.products = res));
    } else {
      this.http
        .getData(this.getProductsCategory + value)
        .subscribe((res: any) => (this.products = res));
    }
  }
}
