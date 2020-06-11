import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {Articles} from "../models/articles";
import {catchError, retry} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  apiUrl = 'http://127.0.0.1:8000/api/articles';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

}
