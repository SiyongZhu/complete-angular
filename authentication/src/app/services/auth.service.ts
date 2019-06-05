// import { JwtHelperService } from '@auth0/angular-jwt'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials){
    return this.http.post('/api/authenticate', 
                           JSON.stringify(credentials))
                    .pipe(map(response => {
                      if (response && response['token']) {
                        localStorage.setItem('token', response['token'])
                        localStorage.setItem('username', response['username'])
                        localStorage.setItem('admin', response['admin'])
                        return true
                      }
                      return false
                    }))
  }

  logout() {
    console.log("logging out")
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('admin')
  }

  isLoggedIn() {
  
    // let jwtHelper = new JwtHelperService()
    let token = localStorage.getItem('token')
    if(!token)
      return false
    // let expirationDate = jwtHelper.getTokenExpirationDate(token)
    // let isExpired = jwtHelper.isTokenExpired(token)
    return true
    // return !isExpired
  }

  get currentUser() {
    let token = localStorage.getItem('token')
    if (!token) return null
    else{
      console.log("admin " + localStorage.getItem('admin'))
      return {name: localStorage.getItem('username'),
              admin: localStorage.getItem('admin')}
    }

    // return new JwtHelperService().decodeToken(token) //decode token to get user
  }
}
