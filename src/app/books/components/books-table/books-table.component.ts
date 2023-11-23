import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Author} from "../../../core/models/author.model";
import {Book} from "../../../core/models/book.model";
import {Sort} from "@angular/material/sort";

@Component({
  selector: 'app-books-table',
  standalone: false,
  templateUrl: './books-table.component.html',
  styleUrl: './books-table.component.scss'
})
export class BooksTableComponent implements  OnInit{
  @Input() books: Book[] | null = null;
  sortedData: Book[] | null = null;

  ngOnInit(): void {
    // @ts-ignore
    this.sortedData = this.books?.slice();
  }



  sortData(sort: Sort) {
    // @ts-ignore
    const data = this.books?.slice();
    if (!sort.active || sort.direction === '') {
      // @ts-ignore
      this.books = data;
      return;
    }

    // @ts-ignore
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      let authorA = a.author.name + a.author.surname + a.author.lastname;
      let authorB = b.author.name + b.author.surname + b.author.lastname;
      switch (sort.active) {
        case 'author':
          return compare(authorA, authorB, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'publisher':
          return compare(a.publisher, b.publisher, isAsc);
        case 'year':
          return compare(a.year, b.year, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
