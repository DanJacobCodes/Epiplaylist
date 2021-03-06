import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HousingFormComponent } from './housing-form/housing-form.component';
import { HousingDataListComponent } from './housing-data-list/housing-data-list.component';
import {Component, Input, Output} from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { AllHomesComponent } from './all-homes/all-homes.component';
import { AddHomeComponent } from './add-home/add-home.component';
import { EditHomeComponent } from './edit-home/edit-home.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContactComponent,
    LoginComponent,
    HousingFormComponent,
    HousingDataListComponent,
    HomeDetailComponent,
    AllHomesComponent,
    AddHomeComponent,
    EditHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
