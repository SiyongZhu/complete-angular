import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Injectable({
  providedIn: 'root'
})
export class PostServiceOld {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPost() {
     return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
          .pipe(catchError(this.handleError));
            // .pipe(catchError((error: HttpResponse<any>) => {
            //   if (error.status === 400)
            //     return throwError(new BadRequestError(error.body))
            //   return throwError(new AppError(error))
            //   // return Observable.throw(new AppError(error))
            // }))
  }

  updatePost(post) {
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post))
                .pipe(catchError(this.handleError));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
            .pipe(catchError(this.handleError));
                // .pipe(catchError((error: HttpResponse<any>) => {
                //   if (error.status === 404)
                //     return throwError(new NotFoundError())
                //   return throwError(new AppError(error))
                //   }
                // ))
  }

  private handleError(error: HttpResponse<any>) {
    if (error.status === 404) {
      return throwError(new NotFoundError);
    } else if (error.status === 400) {
      return throwError(new BadRequestError);
         }
    return throwError(new AppError(error));
  }
}
