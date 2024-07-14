import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { product } from './data-types';
import { EventEmitter } from '@angular/core';
import { CategoryWiseProductDto, ProductAppServicesServiceProxy, ProductCategoryCountDto, ProductViewDto } from '@shared/service-proxies/service-proxies';
//import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  sharedObject: any;
  categoryProduct:any;
  
  dashboardData: Observable<ProductViewDto[]>
  category: Observable<ProductCategoryCountDto[]>
  

  private productIdSource = new BehaviorSubject<number>(null);
  currentProductId = this.productIdSource.asObservable();
  cartData = new EventEmitter<product[] | []>;
  
  constructor(private _dashboard: ProductAppServicesServiceProxy,) { 
    // use service in constructer
     this.dashboardData = this._dashboard.getDashboardData();
     this.category = this._dashboard.getCount();
    }

  changeProductId(productId: number) {
    this.productIdSource.next(productId);
  }

  localAddToCart(data:product){
    let cartData=[];
    let localCart = localStorage.getItem('localCart')
    if(!localCart)
    {
      localStorage.setItem('localCart',JSON.stringify([data]));
    }
    else{
      cartData=JSON.parse(localCart);
      cartData.push(data)
      localStorage.setItem('localCart',JSON.stringify(cartData));
    }
    this.cartData.emit(cartData)
  }
  
  ngOnInit() {

  }
  getDashboardData(){
     this._dashboard.getDashboardData().subscribe((result)=>{
    });
  }

  getCount(){ 
    debugger
    this._dashboard.getCount().subscribe((result)=>{   
      debugger
  //  this.categoryProduct=result;
    });
  }

  
  }



