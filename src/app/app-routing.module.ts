import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthorsPageComponent} from "./authors/containers/authors-page/authors-page.component";
import {BooksPageComponent} from "./books/containers/books-page/books-page.component";

export const routes: Routes = [
  {
    path: 'error',
    loadChildren: () => import('./modules/errors/errors.module').then(m => m.ErrorsModule),
  },

  {
    path: 'authors',
    component: AuthorsPageComponent,
  },
  {
    path: 'books',
    component: BooksPageComponent
  },

  {path: '**', redirectTo: 'authors', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
