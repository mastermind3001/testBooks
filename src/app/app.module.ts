import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateModule} from "@ngx-translate/core";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {routerReducer, RouterState, StoreRouterConnectingModule} from "@ngrx/router-store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {ToastrModule} from "ngx-toastr";
import {environment} from "../environments/environment";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from "./core/components/header/header.component";



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        router: routerReducer,
      },
      {}
    ),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    ToastrModule.forRoot({
      maxOpened: 5,
      closeButton: true,
      positionClass: 'toast-bottom-right',
    }),
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
