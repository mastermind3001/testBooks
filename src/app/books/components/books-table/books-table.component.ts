import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Author} from "../../../core/models/author.model";
import {Book} from "../../../core/models/book.model";

@Component({
  selector: 'app-books-table',
  standalone: false,
  templateUrl: './books-table.component.html',
  styleUrl: './books-table.component.scss'
})
export class BooksTableComponent {
  @Input() books: Book[] | null = null;
}
