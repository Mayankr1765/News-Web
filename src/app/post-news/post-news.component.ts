import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttserService } from '../services/httser.service';
import { News } from './news.interface';

@Component({
  selector: 'app-post-news',
  templateUrl: './post-news.component.html',
  styleUrls: ['./post-news.component.css']
})
export class PostNewsComponent implements OnInit {
  // public newsDate: string=''
  // public newsHeadline: string =''
  // public newsDetails: string=''
  // public newsImage = new Image()


  // public news  = {
  //   // newsDate: '',
  //   newsHeadline: '',
  //   newsDetails: '',
  //   // newsImage?: File
  // }
  public news = {
    headline: '',
    description:''
  }

  // selectedFile  = null

  constructor(private _htser: HttserService) { }

  ngOnInit(): void {
  }

  onAddNews(){
    // this.news['newsDate'] = this.newsDate
    // this.news['newsHeadline'] = this.newsHeadline
    // this.news['newsDetails'] = this.newsDetails
    // console.log('News is '+this.news.newsDate + '' + this.news.newsHeadline)
    


  }

  onSubmit(f: NgForm){
    // this.news.newsDate =f.value.dat,
    // this.news.newsHeadline = f.value.headline,
    // this.news.newsDetails = f.value.textar,
    // console.log(f);
    // console.log(f.value);
    // console.log('value of date is '+ this.news.newsDate)
    // const fd = new FormData();
    
    
    console.log('form values are', f.value)
    this.news = f.value
    this._htser.saveNews(this.news).subscribe(
      (response) => console.log(response),
      (err)=> console.log(err)
    
    )

    // fd.append('news' , this.news)
  }

  onFetchNews(){
    this._htser.fetchNews().subscribe(
      (response) => console.log('response from firebase' , response),
      (err) => console.log(err)
    )
  }

  // onFileSelected(event:any){
  //   this.selectedFile = event.target.files[0]
  //   console.log('event is' , event);
  //   console.log('file is', this.selectedFile)
  // }

  

}
