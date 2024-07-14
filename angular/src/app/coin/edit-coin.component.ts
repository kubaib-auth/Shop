import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CoinDto, CoinServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-coin',
  templateUrl: './edit-coin.component.html',
  styleUrls: ['./edit-coin.component.css']
})
export class EditCoinComponent extends AppComponentBase implements OnInit{
   
  saving = false;
  coin: CoinDto = new CoinDto();
  @Output() onSave = new EventEmitter<any>();
  id: number;
  router: any;
  constructor(
    injector: Injector,
    public _coinService:CoinServiceProxy ,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
   this.recieveId();
    //this.id = this.router.snapshot.params.id;
  }
 recieveId(){
  this._coinService.getByid(this.id).subscribe((result) => {
    this.coin = result;
  });
 }

  save(): void {
    this.saving = true;

    this._coinService.update(this.coin).subscribe(
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
