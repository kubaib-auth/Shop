import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from '../product-data.service';
import { CategoryWiseProductDto, ProductAppServicesServiceProxy, ProductViewDto } from '@shared/service-proxies/service-proxies';
import { result } from 'lodash-es';

@Component({
  selector: 'app-our-shop',
  templateUrl: './our-shop.component.html',
  styleUrls: ['./our-shop.component.css']
})
export class OurShopComponent {
  ourshop: ProductViewDto[];
  productCat:any;
  categoryProduct:any;
  isCategoryA:Boolean=false;
  isShopA:Boolean=false;
  @Output() categoryCountData: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private dataService: ProductDataService,
    private _dashboard: ProductAppServicesServiceProxy,
    private _router: Router, 
    ){
  }
  ngOnInit() {
    debugger
    this.dataService.dashboardData.subscribe((result: ProductViewDto[]) => { 
      this.ourshop = result;
      this.isCategoryA=false;
    
      this.isShopA=true;
    });
   
    this.CategoryCount();
  }
  CategoryCount(){ 
    debugger
    this._dashboard.getCount().subscribe((result)=>{   
      debugger
    this.categoryProduct=result;
    this.categoryCountData.emit(result);
    });
  }
  CategoryDetail(Id:number){
    debugger
      this.isShopA=false;
      this.isCategoryA=true;
      this._dashboard.categoryWiseProductForTheme(Id).subscribe((result)=>{
         this.productCat=result; 
      });
  
   
  }
}
