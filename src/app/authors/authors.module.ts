import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthorFormComponent} from "./components/author-form/author-form.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AuthorsPageComponent} from "./containers/authors-page/authors-page.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AuthorsTableComponent} from "./components/authors-table/authors-table.component";

const COMPONENTS = [AuthorsPageComponent, AuthorFormComponent,  AuthorsTableComponent];

@NgModule({
  declarations: [...COMPONENTS],
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
export class AuthorsModule { }
