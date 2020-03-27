import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient) { }

  getcomments(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1/comments');
 }

 post(opost: Posts): Observable<any> {
     return this.httpClient.post('https://jsonplaceholder.typicode.com/posts', opost);
   }

 delete(): Observable<any> {
     return this.httpClient.delete('https://jsonplaceholder.typicode.com/posts/1');
   }

  }


