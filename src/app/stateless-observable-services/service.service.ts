import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getItems(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts').pipe(shareReplay());
  }

  getPosts() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts').pipe(shareReplay());
  }
}
