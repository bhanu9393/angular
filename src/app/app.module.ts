import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductsIdComponent } from './products-id/products-id.component';
import { SigninComponent } from './signin/signin.component';
import { CheckoutsComponent } from './checkouts/checkouts.component';
import { DisplayComponent } from './display/display.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowComponent } from './show/show.component';
import { VisibilityComponent } from './visibility/visibility.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { TradeComponent } from './trade/trade.component';
import { ImagesComponent } from './images/images.component';
import { ShippingsComponent } from './shippings/shippings.component';
import { DisplayNewComponent } from './display-new/display-new.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsIdComponent,
    SigninComponent,
    CheckoutsComponent,
    DisplayComponent,
    ShowComponent,
    VisibilityComponent,
    LogisticsComponent,
    TradeComponent,
    ImagesComponent,
    ShippingsComponent,
    DisplayNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
