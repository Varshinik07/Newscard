import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
  
status:boolean=false
fetchData=()=>{
  this.myapi.viewData().subscribe(
    (data)=>{
      this.newsdata=data
      this.status=true
    }
  )
}


  newsdata:any={}

ngOnInit(): void {
  }

}
