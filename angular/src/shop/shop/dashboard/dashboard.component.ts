import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryWiseProductDto, Product, ProductAppServicesServiceProxy, ProductCategoryCountDto, ProductViewDto } from '@shared/service-proxies/service-proxies';
import { result } from 'lodash-es';
import { ProductDataService } from '../product-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Output() categoryCountData: EventEmitter<any> = new EventEmitter<any>();

  count : ProductCategoryCountDto = new ProductCategoryCountDto();
  productDetail: CategoryWiseProductDto=new CategoryWiseProductDto();
  productDetailData: CategoryWiseProductDto[];
  ourShopDashboardData: ProductViewDto[];
  isFeaturedProduct: ProductViewDto[];
  categoryProduct=[];
  dashboardData=[];
  lastThree=[];
constructor(
  private _dashboard: ProductAppServicesServiceProxy,
  private dataService: ProductDataService,
  private _router: Router, 
  ){


}
ngOnInit() {
  //this.getDashboardData();
  this.CategoryCount();
  // service result use
  this.dataService.dashboardData.subscribe((result:ProductViewDto[])=>{
    debugger
    
    this.ourShopDashboardData=result.filter(product=>product.isFeatured===false);
    this.isFeaturedProduct = result.filter(product => product.isFeatured === true);

  })
}
  
  // getDashboardData(){
  //   this._dashboard.getDashboardData().subscribe((result)=>{
  //   this.dashboardData=result;
  //   });
  // }
  CategoryCount(){ 
    debugger
    this._dashboard.getCount().subscribe((result)=>{   
    this.categoryProduct=result;
     this.lastThree = this.categoryProduct.slice(-3);
    this.categoryCountData.emit(result);
    });
  }

}
