import { Component } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { CategoryWiseProductDto, ProductAppServicesServiceProxy, ProductCategoryCountDto } from '@shared/service-proxies/service-proxies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerCategory: ProductCategoryCountDto[];
  footerProductCat:CategoryWiseProductDto[];
  isCategoryA: boolean;
  isShopA: boolean;
  constructor(
    private dataService: ProductDataService,
    private _dashboard: ProductAppServicesServiceProxy,
    private _router: Router, 
    ){
  }
  ngOnInit() {
    debugger
    this.dataService.category.subscribe((result: ProductCategoryCountDto[]) => { 
     this.footerCategory=result;
    });
   
  }

  categoryWiseProduct(Id:number){
   
      this.isShopA=false;
      this.isCategoryA=true;
      this._dashboard.categoryWiseProduct(Id).subscribe((result)=>{
         this.footerProductCat=result; 
      })
    
   
}
}
