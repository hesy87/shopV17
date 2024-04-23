import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../shared/UIElemnts/header/header.component';
import  LandingPageComponent  from './landing-page/landing-page.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [HeaderComponent, LandingPageComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export default class ShopComponent {
  @Input() category!:string 
}
