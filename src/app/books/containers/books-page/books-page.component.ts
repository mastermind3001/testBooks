import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorsModule} from "../../../authors/authors.module";
import {AuthorsService} from "../../../authors/services/authors.service";
import {BooksService} from "../../services/books.service";
import {Author} from "../../../core/models/author.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-books-page',
  standalone: false,
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.scss'
})
export class BooksPageComponent implements OnInit {
  authors$: Observable<Author[] | null> ;
  constructor(public authorService: AuthorsService,
              public booksService: BooksService) {
    this.authors$ = this.authorService.getAuthors();

  }

  ngOnInit(): void {
  }

}
