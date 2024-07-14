import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartItemComponent } from './cart/cart-item.component';
import { ProceedOrderComponent } from './proceed-order/proceed-order.component';
import { OurShopComponent } from './ourshop/our-shop.component';

const routes: Routes = [];

@NgModule({
 // imports: [RouterModule.forChild(routes)],
     imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ShopComponent,
                children: [
                    { path: 'dashboard', component:DashboardComponent },
                    { path: 'productdetail/:id', component:ProductdetailComponent },
                    { path: 'cartItem', component:CartItemComponent },
                    { path: 'proceedorder', component:ProceedOrderComponent },
                    { path: 'ourshop', component:OurShopComponent },

                    
                ]
            }
        ])
    ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule { }
