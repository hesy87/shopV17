import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/UIElemnts/header/header.component';
import { CardComponent } from '../../shared/UIElemnts/card/card.component';
import { IProducts } from '../order.model';
import { useHttp } from '../http.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { selectCountList } from '../../reducers/state/order.selector';
import { Observable } from 'rxjs';
import { addItem, removeItem, resetItem } from '../../reducers/state/order.action';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, CardComponent, NgFor,CartComponent,RouterOutlet, AsyncPipe],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  providers: [useHttp],
})
export class LandingPageComponent implements OnInit {
  // products: IProducts[] = [];
  // getAllProductUrl = 'products';
  // getProductsCategory = 'products/category/';
  // url = ''

  title = 'angular-17-ngrx';

  list = [{ userName: 'Ravi', userId: 1 }]
  selectCountList$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.selectCountList$ = this.store.select(selectCountList)
  }
// private http: useHttp, private route: ActivatedRoute
  ngOnInit() {
    // this.route.params.subscribe(
    //   (param: any) => {
    //     this.url = param.category;
    //     this.fetchData()
    //   })
  }

  // fetchData() {
  //   if (this.url === undefined) {
  //     this.http
  //       .getData(this.getAllProductUrl)
  //       .subscribe((res: any) => (this.products = res));
  //   } else {      
  //     this.http
  //       .getData(this.getProductsCategory + this.url)
  //       .subscribe((res: any) => (this.products = res));
  //   }
  // }
  
  
    addItem() {
    let item = { userName: 'test', userId: this.list.length + 1 }
    this.list.push(item)

    this.store.dispatch(addItem({ item }))
  }
  removeItem(userId: number) {
    this.list.pop()
    this.store.dispatch(removeItem({ userId }))
  }
  resetItem() {
    this.list = []
    this.store.dispatch(resetItem())
  }
}
// }
