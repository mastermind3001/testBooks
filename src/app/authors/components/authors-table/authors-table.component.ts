import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Author} from "../../../core/models/author.model";

@Component({
  selector: 'app-authors-table',
  standalone: false,
  templateUrl: './authors-table.component.html',
  styleUrl: './authors-table.component.scss'
})
export class AuthorsTableComponent {
  @Input() authors: Author[] | null = null;
  constructor() {
    console.log(this.authors);
  }
}
