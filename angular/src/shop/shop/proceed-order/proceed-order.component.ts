import { Component, ElementRef, EventEmitter, Injector, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { OrderDetailServiceProxy, OrderDto, OrderServiceProxy } from '@shared/service-proxies/service-proxies';
import { LazyLoadEvent } from 'primeng/api';
import { ProductDataService } from '../product-data.service';
import { ActivatedRoute, Router } from '@angular/router';
//import * as html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
declare var html2pdf: any;
@Component({
  selector: 'app-proceed-order',
  templateUrl: './proceed-order.component.html',
  styleUrls: ['./proceed-order.component.css']
})
export class ProceedOrderComponent extends AppComponentBase implements OnInit {
  @Input() item: number = 0;
  @Input() totalAmount: number = 0;
  productAmount:number;
  date: Date;
  cartItems = [];

  productorderSlip : any;
  UserId: number;
  user: any;
  order: OrderDto = new OrderDto();
  placeOrder:boolean=false;
  paymentOrder:boolean=false;
  procedOrder:boolean=true;

  placeOrdessr:boolean;
  @ViewChild('pdfContent') pdfContent!: ElementRef;
  
  @ViewChild('invoice') invoiceElement!: ElementRef;

  constructor(
    injector: Injector,
    private _orderServices: OrderServiceProxy,
    private _cartService: OrderDetailServiceProxy,
    private _activiteRout:ActivatedRoute,
    private dataService: ProductDataService,
    private router: Router
  ) {
    super(injector);
  }
  ngOnInit(): void {
    debugger
    this.UserId = abp.session.userId;

    // this.placeOrdessr = this._activiteRout.snapshot.queryParamMap(['Payment']===true);
    let cartData = localStorage.getItem('localCart');
   // let ids = [];
              if (cartData) {
                    this.cartItems = JSON.parse(cartData)
                  //  ids = this.cartItems.map(item => item.id);
               }
                      this.dataService.cartData.subscribe((items) => {
                           this.cartItems = items;
                          // ids = items.map(item => item.id);
                       });
         let totalAmount = 0;
         if (this.cartItems) {
             this.totalAmount = this.cartItems.reduce((acc, item) => {
               return acc + (item.productPrice * item.quantity);
             }, 0);

    }
    this.orderSlip();
  }


  onSubmit(event?: LazyLoadEvent) {
    debugger
    this.UserId = abp.session.userId;
      this._orderServices.order(       
        this.UserId = abp.session.userId,       
        this.totalAmount,  
        this.order).subscribe((result) => {
          this.placeOrder=true; 
          this.procedOrder=false;
        });                  
  }
  ordersubmit(){
    this.procedOrder=true;
   this.paymentOrder=true;
  }
  downloadPDF() {
    const options = {
      margin: 1,
      filename: 'order-details.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf()
      .from(this.pdfContent.nativeElement)
      .set(options)
      .save();
   }
   public generatePDF(): void {
    debugger
    html2canvas(this.invoiceElement.nativeElement, { scale: 3 }).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
      const fileWidth = 200;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      let PDF = new jsPDF('p', 'mm', 'a4',);
      PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
      PDF.html(this.invoiceElement.nativeElement.innerHTML)
      PDF.save('Product-Order.pdf');
    });
  }
  
       orderSlip(){
       this._orderServices.generateOrderSlip().subscribe((respons)=>{
        this.productorderSlip=respons;
       })
     }
}
