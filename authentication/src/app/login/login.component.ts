import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  signIn(credentials){
    this.authService.login(credentials)
      .subscribe(result => {
        console.log(result)
        if (result){
          this.router.navigate(['/'])
          this.invalidLogin = false
        }         
        else
          this.invalidLogin = true
      })
  }

}
