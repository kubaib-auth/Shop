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
  imagePreview: string | ArrayBuffer | null = null;
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
  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        this.imagePreview = base64String;
        this.category.image = base64String;
      };
      reader.readAsDataURL(file);
    }
  }
 
  // In CreateOrEditCategoryModelComponent
save(): void {
  this.saving = true;
  if (this.category.id) {
    this._category.update(this.category).subscribe(
      () => {
        this.notify.info(this.l('UpdatedSuccessfully'));
        this.bsModalRef.hide();
        this.onSave.emit(true);  // Emit event on success
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
        this.onSave.emit(true);  // Emit event on success
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
