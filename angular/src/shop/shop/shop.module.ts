import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderShopComponent } from './Layout/header-shop.component';
import { FooterComponent } from './Layout/footer.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import {ProductDataService} from './product-data.service';
import { CartItemComponent } from './cart/cart-item.component';
import { ProceedOrderComponent } from './proceed-order/proceed-order.component'
import { FormsModule } from '@angular/forms';
import { OurShopComponent } from './ourshop/our-shop.component';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    ShopComponent,
    DashboardComponent,
    HeaderShopComponent,
    FooterComponent,
    ProductdetailComponent,
    CartItemComponent,
    ProceedOrderComponent,
    OurShopComponent
    
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    CalendarModule,
  ],
  exports: [
    DashboardComponent
  ],
  providers:[
    ProductDataService
  ]
})
export class ShopModule { }
