import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AppComponentBase } from '@shared/app-component-base';
import { ProductDataService } from '../product-data.service';
import { OrderDetailServiceProxy, OrderServiceProxy } from '@shared/service-proxies/service-proxies';
import { result } from 'lodash-es';
import { LazyLoadEvent } from 'primeng/api';

@Component({
 // selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent extends AppComponentBase implements OnInit {
   cartItems=[];
  // totalAmount: string|number;
   totalAmount: number = 0;
   currentItem : number =0;
   totalAmountReady: boolean=false;
   UserId:number;
   user: any;
   receiveob:[];
   dataToSend:any;
   constructor(
    injector: Injector,
    private _router: Router,
    private _activiteRoute: ActivatedRoute,
    private dataService: ProductDataService,
    private _orderServices: OrderServiceProxy,
    private _cartService: OrderDetailServiceProxy,
    
    ){
       super(injector);
   }
   ngOnInit(){
     
      let cartData = localStorage.getItem('localCart');
      if(cartData)
      {
         this.cartItems=JSON.parse(cartData)
       }
       this.dataService.cartData.subscribe((items)=>{
       this.cartItems=items;
       });
       let totalAmount = 0;
           debugger
        if(this.cartItems) {
          this.totalAmount = this.cartItems.reduce((acc, item) => {
          return acc + (item.productPrice * item.quantity);
           }, 0);
           this.totalAmountReady = true;
        }
         console.log(this.totalAmount);
         this.currentItem = this.totalAmount;
   }
 
   removeItem(item: any) {
    debugger
    // Find the index of the item in the cartItems array
    const index = this.cartItems.findIndex((cartItem: any) => cartItem.id === item.id);
    if (index !== -1) {
        // Remove the item from the cartItems array
        this.cartItems.splice(index, 1);       
        // Update the local storage
        localStorage.setItem('localCart', JSON.stringify(this.cartItems));
    }
}

send(receive: any[]){
   debugger
   this.UserId= abp.session.userId;
   if(this.UserId == null){
      abp.message.confirm(this.l('Please Login Before Procede order', ),undefined,)
   }
   else{
      this._cartService.addCart(receive).subscribe((result)=>{
         this._router.navigate(['/shop/proceedorder']);
      });
      
   } 
   
}


}
