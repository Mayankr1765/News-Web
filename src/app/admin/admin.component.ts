import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // public requiresLogin:boolean = false
  adm : boolean

  constructor(private router: Router, private auth: AuthenticationServiceService) { }

  ngOnInit(): void {
  }

  onLoginAttempt(username:string,password:string){
    if (username=='aditya' && password==='adijhar@090'){
      // alert('Username is'+ username + 'password is ' + password)
      // this.requiresLogin = true
      this.auth.getAuth(true)
      this.router.navigate(['admin/addnews'])

    }
    else{
      alert('please enter valid id and password')
      this.auth.getAuth(false)
      // this.requiresLogin = false
    }
  }

}
