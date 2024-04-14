import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/UIElemnts/header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { useHttp } from './http.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [HeaderComponent, LandingPageComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {

}
