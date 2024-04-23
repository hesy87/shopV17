import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../shared/UIElemnts/header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [HeaderComponent, LandingPageComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
  providers:[HttpClientModule]
})
export class ShopComponent {
  @Input() category!:string 
}
