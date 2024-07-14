import { Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent extends AppComponentBase implements OnInit {
  constructor(injector: Injector, private renderer: Renderer2) {
    super(injector);
  }

  // showTenantChange(): boolean {
  //   return abp.multiTenancy.isEnabled;
  // }
 
  ngOnInit(): void {
    this.renderer.addClass(document.body, '');
  }
}