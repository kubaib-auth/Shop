import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-header-shop',
  templateUrl: './header-shop.component.html',
  styleUrls: ['./header-shop.component.css']
})
export class HeaderShopComponent implements OnInit {
  cartItems=0;
  constructor(private dataService: ProductDataService){
    
  }
ngOnInit(): void {
  // abp.event.trigger('app-header-shop'){
  //   let cartData = localStorage.getItem('localCart')
  //   if(cartData)
  //   {
  //     this.cartItems=JSON.parse(cartData).length
  //   }
  //   this.dataService.cartData.subscribe((items)=>{
  //     this.cartItems=items.length;
  //   });
  // }
 
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData).length;
    }
    this.dataService.cartData.subscribe((items) => {
      this.cartItems = items.length;
    });
 
}

}
