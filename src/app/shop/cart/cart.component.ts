import { Component } from '@angular/core';
import { TableComponent } from '../../shared/UIElemnts/table/table.component';
import { HeaderComponent } from '../../shared/UIElemnts/header/header.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [TableComponent,HeaderComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
