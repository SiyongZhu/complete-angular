//https://jasonwatmore.com/post/2019/05/02/angular-7-mock-backend-example-for-backendless-development
//https://blog.angularindepth.com/the-new-angular-httpclient-api-9e5c85fe3361

import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class FakeBackendIntercepter implements HttpInterceptor{
        
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const {url, method, headers, body } = req
    console.log(req)
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA'
    let orders = [1, 2, 3]
    return of(null)
    .pipe(mergeMap(handleRoute))
    .pipe(materialize()) 
    .pipe(delay(500))
    .pipe(dematerialize())

    function handleRoute(){
      switch(true) {
        case url.endsWith('/api/authenticate') && method === 'POST':
          return authenticate()
        case url.endsWith('/api/orders') && method === 'GET':
          return getOrders()
        default:
          return next.handle(req)
      }
    }

    function authenticate(){
      const { email, password } = JSON.parse(body);
      console.log(body)
      console.log(email + " " + password)
      console.log(token)
      if (email === 'mosh' && password === '1234') {
        console.log("Authentication succeed")
        return ok({username: 'mosh', 
                   admin: 'false',
                   token: token})
      }
      return ok()
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer '+token;
    }

    function getOrders() {
      if (isLoggedIn()) return unauthorized()
      return ok({body: orders})
    }

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }))
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function error(message) {
      return throwError({ error: { message } });
    }
  }
}

export let fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendIntercepter,
    multi: true
};