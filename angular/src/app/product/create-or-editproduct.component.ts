import { Component, EventEmitter, Injector, OnInit, Output,Input } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CategoryAppServicesServiceProxy, CategoryDto, EnumSizeType, ProductAppServicesServiceProxy, ProductDto } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-or-editproduct',
  templateUrl: './create-or-editproduct.component.html',
  styleUrls: ['./create-or-editproduct.component.css'],
 
})
export class CreateOrEditproductComponent extends AppComponentBase implements OnInit {
  saving = false;
  product: ProductDto = new  ProductDto();
  weaterCloth:EnumSizeType=undefined;
  sasas:number;
  @Output() onSave = new EventEmitter<any>();
  @Input() id: number;
  categoryOptions=[];
  selectedCategory:number;
 

  constructor(
    injector: Injector,
    public bsModalRef: BsModalRef,
    private _category: CategoryAppServicesServiceProxy,
    private _product:ProductAppServicesServiceProxy,

  ) {
    super(injector);
  }
  ngOnInit(): void {
   this.getCategoryName();
   this.recieveId(); 
   
  }
  getCategoryName(){
    this._category.getdropdownCategory().subscribe((result) => {
      this.categoryOptions = result;    
    });
  }
  save(): void {
    debugger
    this.saving = true;
    if (this.product.id) {
      this.product.categoryId;
      this.product.status = this.weaterCloth;
      this._product.createOrEdit(this.product).subscribe(
        () => {
          this.notify.info(this.l('UpdatedSuccessfully'));
          this.bsModalRef.hide();
          this.onSave.emit();
        },
        () => {
          this.saving = false;
        }
      );
    } else {
      debugger
      this.product.status = this.weaterCloth;
      this._product.createOrEdit(this.product).subscribe(
        () => {
          this.notify.info(this.l('SavedSuccessfully'));
          this.bsModalRef.hide();
          this.onSave.emit();
        },
        () => {
          this.saving = false;
        }
      );
    }
  }
  recieveId(){
    this._product.getByid(this.id).subscribe((result) => {
      this.product = result;
      this.weaterCloth = this.product.status;
    });
   }
   
  onCategorySelect(event) {
    
    const selectedCategoryId = event.value;
    console.log('Selected Category ID:', selectedCategoryId);
  }
  updateIsFeatured(event: any): void {
    
    this.product.isFeatured = event.target.checked;
  }
}
