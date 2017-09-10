import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';
import { LoggedInPage } from '../pages/logged-in/logged-in';
import { RegisterPage } from '../pages/register/register';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseAuth = {
  apiKey: "AIzaSyBGUEnXm7_nqTInMBWbjLQkgB_cVeT9jSE",
  authDomain: "tuni-board.firebaseapp.com",
  databaseURL: "https://tuni-board.firebaseio.com",
  projectId: "tuni-board",
  storageBucket: "tuni-board.appspot.com",
  messagingSenderId: "617097750460"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    LoginPage,
    RegisterPage,
    LoggedInPage   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    LoginPage,
    RegisterPage,
    LoggedInPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
