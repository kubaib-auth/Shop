import { Component, Injector, Input, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CartItemDto, CategoryWiseProductDto, Product, ProductAppServicesServiceProxy } from '@shared/service-proxies/service-proxies';
//import { EventEmitter } from 'stream';
import { AppComponentBase } from '@shared/app-component-base';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDataService } from '../product-data.service';
import { product } from '../data-types'
@Component({
  // selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent extends AppComponentBase implements OnInit {

  @ViewChild('app-dashboard') myComponent2: DashboardComponent;
  productDetailData:any;
  productData:undefined | product;
  cartItem: CartItemDto = new CartItemDto();
  
  Id:any;
  dashboardData=[];
  // data:any;
  // course = new Product();
  counter = 1;
  constructor(
    injector: Injector,
    private _router: Router,
    private _activiteRout:ActivatedRoute, 
    private _dashboard: ProductAppServicesServiceProxy,
    private dataService: ProductDataService
    ) {
    super(injector);
  }
  ngOnInit(){
      let productId= parseInt(this._activiteRout.snapshot.paramMap.get('id'), 10); 
      productId && this._dashboard.productDetail(productId).subscribe((result)=>{
        this.productDetailData=result;
        this.productData=result;
      })
  }

  handleQuantity(val:string) {
    if(this.counter<20 && val==='plus')
    {
      this.counter+=1;
    }
    else if(this.counter > 1 && val==='min')
    this.counter-=1;
  }
  AddToCart(){
    debugger
    if(this.productData){
      this.productData.quantity=this.counter;
      this.dataService.localAddToCart(this.productData)
    }
  }
 
}
