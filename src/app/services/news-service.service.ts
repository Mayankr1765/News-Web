// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { HttserService } from './httser.service';
// import { News } from '../news';

// @Injectable({
//   providedIn: 'root'
// })
// export class NewsServiceService {

//    newsDetailList: any = []

//   constructor(private http: HttpClient,private firebase: AngularFireDatabase, private hts: HttserService) {}

//   getNewsDetailList(){
//       this.newsDetailList = this.firebase.list('/news')
//     }

//   insertNews(news:any){
    
//     this.newsDetailList.push(news)
//     console.log('inserting', this.newsDetailList)
//     this.http.post<any>('https://jharkhand-today-news-default-rtdb.asia-southeast1.firebasedatabase.app/newsdemo.json',this.newsDetailList[this.newsDetailList.length-1])
//     // this.hts.saveNews(this.newsDetailList[this.newsDetailList.length-1])
//     console.log('after inserting value is' , this.newsDetailList[this.newsDetailList.length-1])


//   }
// }
