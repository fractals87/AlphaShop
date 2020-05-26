import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ArticoliComponent } from './articoli/articoli.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LogoutComponent } from './logout/logout.component';
import { Interpolation } from '@angular/compiler';

import {NgxPaginationModule} from 'ngx-pagination';
import { NewartComponent } from './newart/newart.component';
import { AuthInterceptService } from './services/http/auth-intercept.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ArticoliComponent,
    NavbarComponent,
    FooterComponent,
    JumbotronComponent,
    LogoutComponent,
    NewartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
