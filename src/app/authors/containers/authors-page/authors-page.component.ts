import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorsService} from "../../services/authors.service";

@Component({
  selector: 'app-authors-page',
  templateUrl: './authors-page.component.html',
  styleUrl: './authors-page.component.scss'
})
export class AuthorsPageComponent implements OnInit {
  constructor(public authorsService: AuthorsService) {


  }

  ngOnInit(): void {
  }

}
