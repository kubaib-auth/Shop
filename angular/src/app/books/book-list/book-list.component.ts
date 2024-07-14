import { Component } from '@angular/core';
import { Book, BookServiceProxy } from '@shared/service-proxies/service-proxies';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  BookList = [];
  AllBook = Observable<Book>;
    constructor(private bookservice:BookServiceProxy)
    {

    }
ngOnInit()
{
  this.getAllBook();
}
getAllBook(){
    this.bookservice.getAll().subscribe(result=>{
    this.BookList = result;
  })
}
delete(id:any){
   this.bookservice.delete(id).subscribe(res=>{
   this.getAllBook();
   })
}
}
