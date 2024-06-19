import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { AddComponent } from './project/add/add.component';
import { ListComponent } from './project/list/list.component';
import { EditComponent } from './project/edit/edit.component';
import { SignupComponent } from './security/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'addProject', component: AddComponent },
  { path: 'listProject', component: ListComponent },
  { path: 'editProject/:id', component: EditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
