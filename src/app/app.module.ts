import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContantPageComponent } from './pages/contant-page/contant-page.component';
import { ContantDetailsComponent } from './pages/contant-details/contant-details.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { StaticPageComponent } from './pages/static-page/static-page.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { SignupComponent } from './page/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContantPageComponent,
    ContantDetailsComponent,
    ContactListComponent,
    StaticPageComponent,
    ContactPreviewComponent,
    ContactEditComponent,
    SignupComponent,
    LoginComponent,
    TransferFundComponent,
    MoveListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
