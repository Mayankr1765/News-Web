import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  au :boolean 

  constructor() { }

  getAuth(adm:boolean){
    this.au = adm
    console.log('auth is ' + this.au)
    return adm
  }


}
