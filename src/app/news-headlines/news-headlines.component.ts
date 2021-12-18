import { Component, OnInit } from '@angular/core';
import { HttserService } from '../services/httser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-headlines',
  templateUrl: './news-headlines.component.html',
  styleUrls: ['./news-headlines.component.css']
})
export class NewsHeadlinesComponent implements OnInit {

  newsHeadline : any = []
  news : any = []

  constructor( private ht: HttserService, private router: Router) { }

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(){

    return  this.ht.fetchNews().subscribe(
     (response) => {
       console.log('response from firebase' , response);
       var data = JSON.stringify(response)
       // var data = Object.values(response)
       var e = JSON.parse(data)
       for (var i in e){
         this.news.push(e[i])
       } 
       
       // const data = Object.entries(response).map(e => e[1] )
       // this.news = response
       console.log('data is' , data + 'news is' + this.news)
     },
     (err) => console.log(err)
   )
   

 


}

onClickOpen(){
  this.router.navigateByUrl('/news')
}






}
