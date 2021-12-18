import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { News } from './news';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //  public news = {
  //    headline: '',
  //    description: ''
  //  };

  public router: string;
  constructor(private _router: Router){
    this.router = _router.url;

  }

  // public news: any = []
  // constructor(db : AngularFireDatabase){
  //   db.list('/news/first')
  //   .valueChanges()
  //   .subscribe(news => {
  //     this.news = news
  //   })
  
  //   console.log('value of news is ' + this.news.headline)
  // }
  //   title = 'jhar';
    
  
}
