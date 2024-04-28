import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProducts } from '../../../core/modules/order.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() items!: IProducts;
  @Output() product = new EventEmitter<number>()

  constructor() {}

  navigate(productId: any) {
    this.product.emit(productId)
  }
}

