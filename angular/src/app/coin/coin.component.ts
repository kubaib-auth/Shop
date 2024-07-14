import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreatCoinComponent } from './creat-coin.component';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { Coin, CoinDto, CoinServiceProxy, TenantDtoPagedResultDto } from '@shared/service-proxies/service-proxies';
import { Observable, finalize } from 'rxjs';
import { AppComponentBase } from '@shared/app-component-base';
import { EditCoinComponent } from './edit-coin.component';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent extends AppComponentBase implements OnInit {
  coin: CoinDto[] = [];
  allcoin=[];
  @Output() onSave = new EventEmitter<any>();
  allstudent: Observable<Coin[]>;
  isActive: boolean | null;
  advancedFiltersVisible = false;
  saving = false;
  coinid:number;
  constructor(
    injector: Injector,   
    public _coinService:CoinServiceProxy ,
    private _modalService: BsModalService,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }
  ngOnInit() {
    this.coinlist();
  }
  createCoin(): void {
    
    this.showCreateOrEditTenantDialog();
  }
  editCoin(id: number): void {
    this.showCreateOrEditTenantDialog(id);
  }

  showCreateOrEditTenantDialog(id?: number): void {   
   
    let createOrEditTenantDialog: BsModalRef;
    if (!id) {
      createOrEditTenantDialog = this._modalService.show(
        CreatCoinComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      
      createOrEditTenantDialog = this._modalService.show(
        EditCoinComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    // createOrEditTenantDialog.content.onSave.subscribe(() => {
    //   this.refresh();
    // });
  }


  coinlist(){ 
    this._coinService.getAll().subscribe((result) => {
        this.allcoin = result;    
      });
  }

}
