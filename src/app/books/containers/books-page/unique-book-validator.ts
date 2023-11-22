import {AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors, ValidatorFn} from "@angular/forms";
import {Injectable} from "@angular/core";
import {debounceTime, distinctUntilChanged, map, Observable, of, switchMap, take} from "rxjs";
import {formatDate} from "@angular/common";
import {BooksService} from "../../services/books.service";


export function bookExistsValidator(book: BooksService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return book.getBooks()
      .pipe(
        map(books => {
          let value = control.value;
          let isContains = false;
          if (books) {
            for (let book of books) {
              let bookYear = formatDate(book.year, 'YYYY', 'en-GB');
              let newYear = formatDate(value.year, 'YYYY', 'en-GB');

              let newName = value.name.trim();
              let bookName = book.name.trim();
              if (bookName === newName

                || bookYear.toString() === newYear.toString()) {
                isContains = true;
                break;
              }
            }
          }
          return isContains ? {bookExists: true} : null
        })
      );
  }
}
