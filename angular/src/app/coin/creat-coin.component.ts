import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { CoinDto, CoinServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-creat-coin',
  templateUrl: './creat-coin.component.html',
  styleUrls: ['./creat-coin.component.css']
})
export class CreatCoinComponent  extends AppComponentBase implements OnInit{
 
  saving = false;
  coin: CoinDto = new CoinDto();
 
  @Output() onSave = new EventEmitter<any>();

  cities: City [];
  selectedCities: City[];

  constructor(
    injector: Injector,
    public _coinService:CoinServiceProxy ,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.coin.isActive = true;
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'San Francisco', code: 'SF' },
      { name: 'Los Angeles', code: 'LA' },
      { name: 'Chicago', code: 'CHI' }
    ];
    this.selectedCities = [];
  }

  save(): void {
    this.saving = true;
    this._coinService.create(this.coin).subscribe(
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
