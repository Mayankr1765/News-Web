import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttserService } from '../services/httser.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
// import { NewsServiceService } from '../services/news-service.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  imgFile : string = ''
  selectedImage : any = null

  newsForm = new FormGroup({
    headline: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    imageFile: new FormControl('',Validators.required)


  })


  constructor( private httpser:HttserService , private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.resetForm()
  }

  onSubmit(formValue: any){
    // console.log('values are' + this.newsForm.value.headline + ' ' + this.newsForm.value.imageFile);

  
    
    

    var filePath = `images/${this.selectedImage.name}_${new Date().getTime()}`
    const fileref = this.storage.ref(filePath)
    this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
      finalize(()=> {
        fileref.getDownloadURL().subscribe((url) => {
          formValue['imageFile'] = url
          const send = {
            headline : formValue.headline,
            description : formValue.description,
            imageFile : formValue['imageFile']

          }
          this.httpser.saveNews(send).subscribe(
            (response) => console.log(' response is ' + response),
            (err)=> console.log(err)
      )
          // this.ser.insertNews(send)
          console.log ( 'data we are sending' , send)
          this.resetForm()
          console.log('url value is ' + formValue['imageFile'] + 'headline is' + formValue.headline)
        })
        
      })
      
    ).subscribe()

    
  }

  showPrev(event: any){
    if (event.target.files && event.target.files[0]){
      const reader = new FileReader()
      reader.onload = (e: any) => this.imgFile = e.target.result
      reader.readAsDataURL(event.target.files[0])
      this.selectedImage = event.target.files[0]
      console.log('selected image is ' , event.target.files[0])
    }
    else{
      this.imgFile = ''
      this.selectedImage = null
    }
    

  }

  resetForm(){
    this.newsForm.reset();
    this.newsForm.setValue({
      headline: '',
      description: '',
      imageFile:''
    })
    this.imgFile = ''
  }



}
