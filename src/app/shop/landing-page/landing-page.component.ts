import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/UIElemnts/header/header.component';
import { CardComponent } from '../../shared/UIElemnts/card/card.component';
import { IProducts } from '../order.model';
import { useHttp } from '../http.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, CardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  providers:[useHttp]
})
export class LandingPageComponent implements OnInit {
  products: IProducts[] = [];
  getAllProductUrl = 'products';

  constructor(private http: useHttp) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http
      .getData(this.getAllProductUrl)
      .subscribe((res: any) => (this.products = res));
  }
}
