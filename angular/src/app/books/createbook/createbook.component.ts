import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { Router } from '@angular/router';
import { BookDto, BookServiceProxy } from '@shared/service-proxies/service-proxies';
@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent extends AppComponentBase
implements OnInit {
  @Output() onSave = new EventEmitter<any>();
  data:any;

  book = new BookDto();
   constructor(
    injector: Injector,
    private bookservice:BookServiceProxy,
    private router:Router
    )
   {
     super(injector);
   }
  ngOnInit(): void {
   
  }

   SubmitFormData(data:any)
   {
         debugger
         this.bookservice.create(data).subscribe(result=>{
          this.router.navigate(['app/book-list'])
          console.log("result");
         })
   }


}
