import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutsComponent } from './checkouts/checkouts.component';
import { DisplayNewComponent } from './display-new/display-new.component';
import { DisplayComponent } from './display/display.component';
import { ImagesComponent } from './images/images.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { ProductsIdComponent } from './products-id/products-id.component';
import { ProductsComponent } from './products/products.component';
import { ShippingsComponent } from './shippings/shippings.component';
import { ShowComponent } from './show/show.component';
import { SigninComponent } from './signin/signin.component';
import { CompletedComponent } from './todo/completed/completed.component';
import { TradeComponent } from './trade/trade.component';
import { VisibilityComponent } from './visibility/visibility.component';

const routes: Routes = [
{path:'products',component:ProductsComponent},
{path:'completed',component:CompletedComponent},
{path:'signin',component:SigninComponent},
{path:'products/:id',component:ProductsIdComponent}, 
{path:'checkout',component:CheckoutsComponent},
{path:'display',component:DisplayComponent},
{path:'show',component:ShowComponent},
{path:'visibility',component:VisibilityComponent},
{path:'logistics',component:LogisticsComponent},
{path:'displayNew',component:DisplayNewComponent},
{path:'trade',component:TradeComponent},
{path:'images',component:ImagesComponent},
{path:'shipping',component:ShippingsComponent},

{ path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
