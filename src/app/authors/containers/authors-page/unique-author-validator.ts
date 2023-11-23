import {AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors, ValidatorFn} from "@angular/forms";
import {Injectable} from "@angular/core";
import {AuthorsService} from "../../services/authors.service";
import {debounceTime, distinctUntilChanged, map, Observable, of, switchMap, take} from "rxjs";
import {formatDate} from "@angular/common";


export function authorExistsValidator(author: AuthorsService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return author.getAuthors()
      .pipe(
        map(authors => {
          let value = control.value;
          let isContains = false;
          if (authors) {
            for (let author of authors) {
              let authorBirthday = formatDate(author.birthday, 'YYYY-MM-dd', 'en-GB');
              let newBirthday = formatDate(value.birthday, 'YYYY-MM-dd', 'en-GB');

              let newName = value.name.trim() + value.surname.trim() + value.lastname.trim();
              let authorName = author.name.trim() + author.surname.trim() + author.lastname.trim();

              if ((authorName == newName)

                && (authorBirthday.toString() == newBirthday.toString()) ) {
                isContains = true;
                break;
              }
            }
          }
          return isContains ? {authorExists: true} : null
        })
      );
  }
}
