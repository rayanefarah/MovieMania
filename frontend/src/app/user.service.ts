import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  addUser(user: User) : Observable<User> {
    const url = 'http://localhost:3000/user'
    console.log(user);
    return this.http.post<User>(url,user);
  }
  
}
