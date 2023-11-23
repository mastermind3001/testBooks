import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup, ReactiveFormsModule, ValidationErrors,
  Validator,
  Validators
} from "@angular/forms";
import {Author} from "../../../core/models/author.model";
import {Observable, Subject, takeUntil} from "rxjs";
import {v4 as uuidv4} from 'uuid';
import {bookExistsValidator} from "../../containers/books-page/unique-book-validator";
import {BooksService} from "../../services/books.service";


@Component({
  selector: 'app-book-form',
  standalone: false,
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss',
})
export class BookFormComponent implements OnInit, OnDestroy,
  ControlValueAccessor, Validator {
  fb: FormGroup;
  private destroyed = new Subject<void>();
  @Input() authors: Author[] | null = [];

  constructor(private book: BooksService) {
    this.fb = new FormGroup({
        author: new FormControl(
          "",
          {
            validators: [Validators.required,],
          }),
        name: new FormControl('',
          [Validators.required, Validators.maxLength(10)]),
        publisher: new FormControl('',
          [Validators.required, Validators.maxLength(20)]),
        year: new FormControl('',
          [Validators.required, Validators.maxLength(10)]),
      },
      {
        asyncValidators: [bookExistsValidator(this.book)]
      });
  }

  get author(): AbstractControl {
    return this.fb.get('author') as AbstractControl;
  }

  get name(): AbstractControl {
    return this.fb.get('name') as AbstractControl;
  }

  get publisher(): AbstractControl {
    return this.fb.get('publisher') as AbstractControl;
  }

  get year(): AbstractControl {
    return this.fb.get('year') as AbstractControl;
  }

  ngOnDestroy(): void {
    // this.destroyed.next();
    // this.destroyed.complete();
  }

  ngOnInit(): void {
    // this.fb.valueChanges.pipe(takeUntil(this.destroyed)).subscribe(value => {
    //   console.log(this.fb.errors);
    // });

    console.log(this.authors);
  }

  onChange = (_: any) => null;

  onTouched = () => null;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    if (obj) {

      this.fb.patchValue({
        author: obj.author,
        name: obj.name,
        publisher: obj.publisher,
        year: obj.year,
      });
    }
  }

  sendBookStorage() {
    let booksString = localStorage.getItem('books');
    let books = [];
    if (booksString) {
      // @ts-ignore
      books = JSON.parse(booksString);
    }
    books.push({
      id: uuidv4(), // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
      ...this.fb.value,
      author: this.authors?.find((item) =>
        item.id === this.author.value
      )
    });


    localStorage.setItem("books", JSON.stringify(books))
    console.log(books);
    this.fb.reset();
    this.fb.setErrors(null);
    for (let controlsKey in this.fb.controls) {
      this.fb.controls[controlsKey].setErrors(null);
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.fb.errors ? {invalid: true} : null;
  }

  get disabled(): boolean {
    return this.fb.invalid;
  };
}
