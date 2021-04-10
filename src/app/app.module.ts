import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgProgressModule} from 'ngx-progressbar'
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { PublicComponent } from './pages/public/public.component';
// import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthModule } from './authorization/auth.module';
import { AlertModule } from 'ngx-alerts';

@NgModule({
  declarations: [
    AppComponent,
    // NavMenuComponent,
    AdminComponent,
    ManagerComponent,
    PublicComponent,
    ContactComponent,
    HeaderComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    AuthModule,
    NgProgressModule,
    ToastrModule.forRoot(),
    AlertModule.forRoot()
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
