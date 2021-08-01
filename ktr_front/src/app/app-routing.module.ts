import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {ErrorPageComponent} from './pages/error-page/error-page.component';
import {CardsComponent} from './pages/logged/cards/cards.component';
import {UsersComponent} from './pages/logged/users/users.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
