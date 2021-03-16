import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies() : Observable<Movie[]> {
    const url = 'http://localhost:3000/movies'
    return this.http.get<Movie[]>(url)
    .pipe(
      catchError(this.handleError<Movie[]>([])) 
    );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);  
      return of(result as T);
    };
  }

}
