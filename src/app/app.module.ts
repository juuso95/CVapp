import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/Welcome';
import { Login } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu'; 


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { LoginModule } from '../pages/login/login.module';

const firebaseAuth ={
  apiKey: "AIzaSyAN8xi0X-fB22RRxmLeivvkRfhfy7N7-0M",
  authDomain: "loginsystem-hkjk.firebaseapp.com",
  databaseURL: "https://loginsystem-hkjk.firebaseio.com",
  projectId: "loginsystem-hkjk",
  storageBucket: "",
  messagingSenderId: "402198038253"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WelcomePage,
    //Login,
    RegisterPage
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    LoginModule
    //TabsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    //TabsPage,
    WelcomePage,
    Login,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
