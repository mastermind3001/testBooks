import { Injectable } from '@angular/core';

import {Author} from "../../core/models/author.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor() {}

  getAuthors(): Observable<Author[] | null> {
    let authorsString = localStorage.getItem('authors');
    // @ts-ignore
    return of(JSON.parse(authorsString));
  }
}
