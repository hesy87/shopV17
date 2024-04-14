import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from '../../../shop/order.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input() items!:IProducts

  ngOnInit() {}
}
