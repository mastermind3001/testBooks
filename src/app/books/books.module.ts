import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BookFormComponent} from "./components/book-form/book-form.component";
import {BooksTableComponent} from "./components/books-table/books-table.component";
import {BooksPageComponent} from "./containers/books-page/books-page.component";
import {YearDatepickerComponent} from "./components/year-datepicker/year-datepicker.component";

const COMPONENTS = [
  BooksPageComponent,
  BookFormComponent,
  BooksTableComponent,
  YearDatepickerComponent
];

@NgModule({
  declarations: [...COMPONENTS,],
  exports: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgbModule,

  ]
})
export class BooksModule { }
