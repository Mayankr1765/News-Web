import { Component,  } from '@angular/core';
import { Router } from '@angular/router';
import { HttserService } from '../services/httser.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SelectedNewsComponent } from '../selected-news/selected-news.component';
// import { NewsServiceService } from '../services/news-service.service';

@Component({
    selector: 'app-news',
     templateUrl: './news.component.html',
     styleUrls: ['./news.component.css']
   })
export class NewsComponent  {
  news ?: any = []

  constructor( private hts: HttserService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    

    this.loadNews();


  }

  // onSelect(data:any) {
  //   console.log('selected value is ' , data.headline)
  //   this.router.navigate(['news/selectednews'])

  // }

  loadNews(){

         return  this.hts.fetchNews().subscribe(
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

      onNewsClick(event: any){
        console.log('event data' + event.headline)
        const dialogRef = this.dialog.open(SelectedNewsComponent,{
          width: '500px',
          height : '600px',
          data : {
            headline : event.headline,
            description : event.description,
            imageFile : event.imageFile
          }
          

        })

      }


    

}











































































// import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttserService } from '../services/httser.service';
// import { News } from '../post-news/news.interface';
// import { NewsServiceService } from '../services/news-service.service';

// 
// export class NewsComponent implements OnInit {

//    news ?: any = []


  

//   constructor(private _htser: HttserService, private ser: NewsServiceService) { }

//   ngOnInit(): void {
//     // const xyz = this.loadNews()
//     // const abc = Object.entries(xyz)
//     //  this.news = abc
//     //  console.log('news from firebase is' , this.news)
//     this.loadNews()
//     this.ser.getNewsDetailList()
//     console.log('news from firebase' , this.ser.getNewsDetailList())
//     console.log('news from load is' , this.loadNews())

  
//   }

//   

// }
