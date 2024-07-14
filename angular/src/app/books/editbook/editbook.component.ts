import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, BookServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  id:any;
  data:any;
  book=new Book();
  
  constructor(
    private bookservice:BookServiceProxy,
    private router : ActivatedRoute,
    private Route:Router
    )
  {

  }
  ngOnInit(): void {
    this.id=this.router.snapshot.params.id;
    this.getallbookid();
  }
  
  getallbookid(){
    this.bookservice.getByid(this.id).subscribe(res=>{
      this.data=res;
      this.book=this.data;
    });
  }
  updateBook()
  {
    this.bookservice.update(this.book).subscribe(res=>{
      debugger
      this.Route.navigate(['app/book-list'])
    })
  }
}
