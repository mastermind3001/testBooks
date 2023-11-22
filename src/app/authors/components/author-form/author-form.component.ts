import {Component, OnDestroy, OnInit} from '@angular/core';
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
import {Subject, takeUntil} from "rxjs";
import {authorExistsValidator} from "../../containers/authors-page/unique-author-validator";
import {AuthorsService} from "../../services/authors.service";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-author-form',
  standalone: false,
  templateUrl: './author-form.component.html',
  styleUrl: './author-form.component.scss'
})
export class AuthorFormComponent implements OnInit, OnDestroy,
  ControlValueAccessor, Validator {
  fb: FormGroup;
  private destroyed = new Subject<void>();

  constructor(private author: AuthorsService) {
    this.fb = new FormGroup({
        surname: new FormControl(
          "",
          {
            validators: [Validators.required, Validators.maxLength(10)],
          }),
        name: new FormControl('',
          [Validators.required, Validators.maxLength(10)]),
        lastname: new FormControl('',
          [Validators.required, Validators.maxLength(10)]),
        birthday: new FormControl('',
          [Validators.required, Validators.maxLength(20)]),
      },
      {
        asyncValidators: [authorExistsValidator(this.author)]
      });
  }

  get surname(): AbstractControl {
    return this.fb.get('surname') as AbstractControl;
  }

  get name(): AbstractControl {
    return this.fb.get('name') as AbstractControl;
  }

  get lastname(): AbstractControl {
    return this.fb.get('lastname') as AbstractControl;
  }

  get birthday(): AbstractControl {
    return this.fb.get('birthday') as AbstractControl;
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  ngOnInit(): void {
    this.fb.valueChanges.pipe(takeUntil(this.destroyed)).subscribe(value => {
      console.log(this.fb.errors);
    });
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
        surname: obj.surname,
        name: obj.name,
        lastname: obj.lastname,
        birthday: obj.birthday,
      });
    }
  }

  sendAuthorStorage() {
    let authorsString = localStorage.getItem('authors');
    let authors = [];
    if (authorsString) {
      // @ts-ignore
      authors = JSON.parse(authorsString);
    }
    authors.push({
      id: uuidv4(), // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
      ...this.fb.value
    });


    localStorage.setItem("authors", JSON.stringify(authors))
    console.log(authors);
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
    return !!this.fb.errors;
  };
}
