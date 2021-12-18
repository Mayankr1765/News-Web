import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../post-news/news.interface'

@Injectable({
  providedIn: 'root'
})
export class HttserService {

  // const newsData = { news , url }

  

  constructor(private http: HttpClient) { }

  saveNews(news:News){
    //  return this.http.post<News>('https://news-app-9e676-default-rtdb.asia-southeast1.firebasedatabase.app/newsdemo.json',news)
     return this.http.post<News>('https://jharkhand-today-news-default-rtdb.asia-southeast1.firebasedatabase.app/newsdemo.json',news)
  }

  fetchNews(){
    return this.http.get<News>('https://jharkhand-today-news-default-rtdb.asia-southeast1.firebasedatabase.app/newsdemo.json')
  }
   
}
