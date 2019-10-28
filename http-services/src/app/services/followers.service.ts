import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FollowersService extends DataService{
  
  constructor(http: HttpClient) { 
    super('https://api.github.com/users/mosh-hamedani/followers', http)
  }

  
}