import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CategoryAppServicesServiceProxy, CategoryDto } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-or-edit-category-model',
  templateUrl: './create-or-edit-category-model.component.html',
  styleUrls: ['./create-or-edit-category-model.component.css']
})
export class CreateOrEditCategoryModelComponent extends AppComponentBase implements OnInit{
  saving = false;
  category: CategoryDto =   new  CategoryDto();
  @Output() onSave = new EventEmitter<any>();
  @Input() id: number;
  constructor(
    injector: Injector,
    public bsModalRef: BsModalRef,
    private _category: CategoryAppServicesServiceProxy,
  ) {
    super(injector);
  }
  ngOnInit(): void {
   this.recieveId();
   
  }
  
  save(): void {
    this.saving = true;
    if (this.category.id) {
      this._category.update(this.category).subscribe(
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
      this._category.create(this.category).subscribe(
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
    this._category.getByid(this.id).subscribe((result) => {
      this.category = result;
    });
   }
}
