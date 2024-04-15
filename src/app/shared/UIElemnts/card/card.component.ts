import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from '../../../shop/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input() items!: IProducts;

  constructor(private route: Router) {}

  ngOnInit() {}

  navigate(productId: any) {
    this.route.navigate([`products/${productId.id}`])
  }
}
