import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CategoryAppServicesServiceProxy, ProductAppServicesServiceProxy, ProductCategoryCountDto } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DashboardComponent } from 'shop/shop/dashboard/dashboard.component';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent extends AppComponentBase implements OnInit{
  showDetails = false;
  saving = false;
  categoryWiseProductList=[];
  categoryProduct=[];
  count : ProductCategoryCountDto = new ProductCategoryCountDto();
  @ViewChild(DashboardComponent) productCategory:DashboardComponent;
  visibleRows: Set<number> = new Set<number>();
  constructor(
    injector: Injector,   
    private _modalService: BsModalService,
    private _category: CategoryAppServicesServiceProxy,
    private _product:ProductAppServicesServiceProxy,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }
  ngOnInit(): void {
   this.CategoryCount();
   
  }
  toggleDetails(categoryId:number) {
    debugger
    if (this.visibleRows.has(categoryId)) {
      this.visibleRows.delete(categoryId);
    } else {
      this.visibleRows.add(categoryId);
    }
    // this._product.categoryWiseProduct(categoryId).subscribe((result)=>
    // {
    //   debugger
    //   this.categoryWiseProductList=result;
    // },
    // (error) => {
    //   console.error('Error fetching category-wise product list:', error);
    // }
    // );
  }
isRowVisible(categoryId: number): boolean {
  return this.visibleRows.has(categoryId);
}
  CategoryCount(){ 
    this._product.getCount().subscribe((result)=>{   
    this.categoryProduct=result;
    });
  }
}
