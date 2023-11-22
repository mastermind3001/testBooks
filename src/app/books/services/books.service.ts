import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Book} from "../../core/models/book.model";

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooks(): Observable<Book[] | null> {
    let booksString = localStorage.getItem('books');
    // @ts-ignore
    return of(JSON.parse(booksString));
  }
}
