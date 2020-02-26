import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination'

import {AngularBootstrapToastsModule} from 'angular-bootstrap-toasts'

import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginUserComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AngularBootstrapToastsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
