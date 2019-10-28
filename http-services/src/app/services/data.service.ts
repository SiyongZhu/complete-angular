import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
     return this.http.get(this.url)
            .pipe( map(response => response),
              catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
          .pipe( map( response => response['id']),
            catchError(this.handleError));
            // .pipe(catchError((error: HttpResponse<any>) => {
            //   if (error.status === 400)
            //     return throwError(new BadRequestError(error.body))
            //   return throwError(new AppError(error))
            //   // return Observable.throw(new AppError(error))
            // }))
  }

  update(resource) {
    return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource))
                .pipe(
                  map(response => console.log(response)),
                  retry(3),
                  catchError(this.handleError));
  }

  delete(id) {
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
