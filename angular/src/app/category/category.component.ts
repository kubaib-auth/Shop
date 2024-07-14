import { Component, EventEmitter, Injector, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CategoryAppServicesServiceProxy, CategoryDto, GetCategoryForViewDto } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { CreateOrEditCategoryModelComponent } from './create-or-edit-category-model.component';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Paginator } from 'primeng/paginator';
import { AppConsts } from '@shared/AppConsts';
import { result } from 'lodash-es';
import { appModuleAnimation } from '@shared/animations/routerTransition';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  // encapsulation:ViewEncapsulation.None,
  // animations:[appModuleAnimation],
})
export class CategoryComponent extends AppComponentBase implements OnInit {
  
  filterText='';
  namefilter='';
  sorting='';
  skipCount:number;
  maxResultCount:number;
  //categoryList=[];
  categoryList: any[] = [];
  id?: number;
  //category: CategoryDto =   new  CategoryDto();
  category: GetCategoryForViewDto =   new  GetCategoryForViewDto();
  @Output() onSave = new EventEmitter<any>();
  @ViewChild('dataTable',{static:true}) dataTable:Table;
  @ViewChild('paginator',{static:true}) paginator:Paginator;
  saving = false;
 
  constructor(
    injector: Injector,   
    private _modalService: BsModalService,
    private _category: CategoryAppServicesServiceProxy,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }
  ngOnInit() {
    this.getCategoryAll()
  //  this.list();
  }
  createOrEditProduct(id?: number): void {
    debugger
    const createOrEditProductDialog: BsModalRef = this._modalService.show(
      CreateOrEditCategoryModelComponent,
      {
        class: 'modal-lg',
        initialState: {
          id: id || null,
        },
      }
    );
    createOrEditProductDialog.content.onSave.subscribe((result) => {
    //  this.list(); 
    this.getCategoryAll()
    });
  }
getCategoryAll(event?: LazyLoadEvent){
  
  debugger
 this._category.getAll(
  this.filterText,
  this.namefilter,
  this.sorting,
  this.skipCount,
  this.maxResultCount
  ).subscribe((result)=>{
  this.categoryList = result.items;   
 });
}
  // list(){ 
  //   this._category.getAll().subscribe((result) => {
  //       this.categoryList = result;    
  //     });
  // }
 
  deleteCategory(items: CategoryDto): void {
    const name = items.categoryName;
    debugger
    this._category.deleteCategory(items.id)
        .pipe(
            finalize(() => this.refresh())
        )
        .subscribe(
            () => {
                abp.notify.success(this.l('SuccessfullyDeleted'));
            },
            (error) => {
                if (error.status === 500 && error.error) {
                    abp.message.error(error.error, 'Associated Products');
                } else {
                    abp.message.error(this.l('Cannot delete category because it has associated products.'));
                }
            }
        );
}
  refresh() {
   // this.list(); 
   this.getCategoryAll()
  }
}
