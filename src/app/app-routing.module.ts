import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [

  {path : '', component : LoginUserComponent},
  { path: 'login', component: LoginUserComponent }  ,
  {path : 'dashboard', component : DashboardComponent},
  {path : 'user_register', component : RegisterUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
