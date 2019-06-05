import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  signIn(credentials){
    this.authService.login(credentials)
      .subscribe(result => {
        console.log(result)
        if (result){
          //This is to accept localhost:4200/login?returnUrl=admin
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')
          console.log("returnUrl "+returnUrl)
          this.router.navigate([returnUrl || '/'])
          this.invalidLogin = false
        }         
        else
          this.invalidLogin = true
      })
  }

}
