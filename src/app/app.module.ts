import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';
import {LoginPage} from '../pages/login/login' ;
import {RegisterPage} from '../pages/register/register';
import { HttpClientModule } from '@angular/common/http';
import { PersonalizedPage } from '../pages/personalized/personalized';
import { AutomatePage } from '../pages/automate/automate';
import {AdminPage} from '../pages/admin/admin'
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { MessagePage } from '../pages/message/message';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { LocalNotifications } from '@ionic-native/local-notifications';

var config = {
  apiKey: "AIzaSyD-60vJrUA-k0qFjOyc-2quuULN2t9DKAc",
  authDomain: "momentsintime-a9b60.firebaseapp.com",
  databaseURL: "https://momentsintime-a9b60.firebaseio.com",
  projectId: "momentsintime-a9b60",
  storageBucket: "",
  messagingSenderId: "475473470654"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage, AdminPage ,
    TabsPage , LoginPage , RegisterPage,PersonalizedPage,AutomatePage,MessagePage
  ],
  imports: [
    BrowserModule,HttpClientModule ,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage, AdminPage , 
    TabsPage , RegisterPage , LoginPage,PersonalizedPage,AutomatePage,MessagePage
  ],
  providers: [
    StatusBar,
    SplashScreen, DatabaseProvider , SMS , SocialSharing ,Contacts,LocalNotifications ,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  
  ]
})
export class AppModule {}
