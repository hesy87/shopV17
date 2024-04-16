import { Component, Input, OnInit } from '@angular/core';
import { IOrder } from '../../../reducers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  @Input() orderList!: IOrder[];
  ngOnInit() {
    console.log(this.orderList);
  }
}
