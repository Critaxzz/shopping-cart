import { SigninComponent } from './register/signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:SigninComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
