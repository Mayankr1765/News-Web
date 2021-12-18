import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-selected-news',
  templateUrl: './selected-news.component.html',
  styleUrls: ['./selected-news.component.css']
})
export class SelectedNewsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {description: string , headline:string , imageFile : File}) { }


  ngOnInit(): void {
  }

}
