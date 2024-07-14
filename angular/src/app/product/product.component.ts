import { Component,EventEmitter,Injector,OnInit, Output,ViewChild,ViewEncapsulation} from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateOrEditproductComponent } from './create-or-editproduct.component';
import { CategoryAppServicesServiceProxy,CategoryDropdownDto,CategoryDto,CategoryWiseProductDto,ProductAppServicesServiceProxy,ProductDto,UserDtoPagedResultDto } from '@shared/service-proxies/service-proxies';
import { finalize } from 'rxjs';
import {PagedListingComponentBase,PagedRequestDto,} from '@shared/paged-listing-component-base';
import { result } from 'lodash-es';
import { LazyLoadEvent } from 'primeng/api';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProductComponent extends AppComponentBase implements OnInit{
LazyLoad($event: any) {
throw new Error('Method not implemented.');
}
 
 
  
  categoryWiseProductList=[];
  id?: number;
  product: ProductDto = new  ProductDto();
  categoryOptions:CategoryDropdownDto[];
  
  categoryId:number;
  categoryFiterId:number;
  productCategory: CategoryWiseProductDto = new CategoryWiseProductDto();
  productList: any[] = [];
  @Output() onSave = new EventEmitter<any>();
  @ViewChild(CreateOrEditproductComponent) getCategory:CreateOrEditproductComponent;
  saving = false;
  showDetails = false;
  filter='';
  filterText='';
  categoryNameFilter='';
  sorting='';
  skipCount:number;
  maxResultCount:number;
  constructor(
    injector: Injector,   
    private _modalService: BsModalService,
    private _category: CategoryAppServicesServiceProxy,
    private _product:ProductAppServicesServiceProxy,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }
  ngOnInit() {
    this.getProductAll();
    this.getCategoryName();
  }
  
  getCategoryName(){
    this._category.getdropdownCategory().subscribe((result) => {
      this.categoryOptions = result;    
    });
  }
  createOrEditProduct(id?: number): void {
    
    const createOrEditProductDialog: BsModalRef = this._modalService.show(
      CreateOrEditproductComponent,
      {
        class: 'modal-lg',
        initialState: {
          id: id || null,
        },
      }
    );
    createOrEditProductDialog.content.onSave.subscribe((result) => {
      this.getProductAll(); 
    });
  }
 
  getProductAll(event?: LazyLoadEvent){
    debugger
    this._product.getAll( 
     this.filter,
     this.filterText,
     this.categoryNameFilter,
     this.categoryFiterId === null? this.categoryFiterId = undefined: this.categoryFiterId,
     this.sorting,
     this.skipCount,
     this.maxResultCount,
     ).subscribe((result) => {
        this.productList = result.items;    
      });
  }
 

  deleteCategory(items: ProductDto): void {
    debugger
    const name = items.productName;
    abp.message.confirm(
      this.l('ProductDeleteWarningMessage',name),
      undefined,
      (result: boolean) => {
        if (result) {
          this._product
            .deleteProduct(items.id)
            .pipe(
              finalize(() => {
                abp.notify.success(this.l('SuccessfullyDeleted'));
                this.refresh();
                
              })
            )
            .subscribe(() => {});
        }
      }
    );
  }
  refresh() {
    this.getProductAll(); 
  }
}
