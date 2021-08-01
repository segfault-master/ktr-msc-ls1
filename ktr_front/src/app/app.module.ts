import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import {RegisterComponent} from './pages/auth-component/register/register.component';
import {LoginComponent} from './pages/auth-component/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CardsComponent } from './pages/logged/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './pages/logged/users/users.component';
import { HeaderComponent } from './pages/logged/header/header.component';
import { AddCardComponent } from './pages/logged/add-card/add-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ErrorPageComponent,
    RegisterComponent,
    LoginComponent,
    CardsComponent,
    UsersComponent,
    HeaderComponent,
    AddCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
