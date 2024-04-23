import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { BigCardComponent } from './shared/UIElemnts/big-card/big-card.component';
import { CartComponent } from './shop/cart/cart.component';

export const routes: Routes = [
    {path:'' , component:ShopComponent},
    {path:'cart' , component:CartComponent},
    // {path:':category' , component:ShopComponent},
    {
        path:':category' ,
        loadComponent: async()=> (await import('./shop/shop.component')).ShopComponent
        
    },
    {path:'products/:id' , component:BigCardComponent},
];
