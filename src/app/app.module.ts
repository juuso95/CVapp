import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SkillsPage } from '../pages/skills/skills';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
//import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
//import { MenuPage } from '../pages/menu/menu'; 
import { ProfilePage } from '../pages/profile/profile';
import { TargetedPage } from '../pages/targeted/targeted';
import { ActivitiesPage } from '../pages/activities/activities';
import { ProjectworkPage } from '../pages/projectwork/projectwork';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
//import { TabsPageModule } from '../pages/tabs/tabs.module';
import { LoginModule } from '../pages/login/login.module';
import { HttpModule } from '@angular/http';
import { TooltipsModule } from 'ionic-tooltips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const firebaseAuth ={
  apiKey: "AIzaSyAN8xi0X-fB22RRxmLeivvkRfhfy7N7-0M",
  authDomain: "loginsystem-hkjk.firebaseapp.com",
  databaseURL: "https://loginsystem-hkjk.firebaseio.com",
  projectId: "loginsystem-hkjk",
  storageBucket: "",
  messagingSenderId: "402198038253"
};
var config = {
  backButtonText: '',
  backButtonIcon: 'md-arrow-back',
  iconMode: 'md',
  pageTransition: 'md',
  mode:'md',
  tabsPlacement: 'bottom'
};

@NgModule({
  declarations: [
    MyApp,
    SkillsPage,
    ContactPage,
    HomePage,
    //Login,
    RegisterPage,
    WelcomePage,
    ProfilePage,
    TargetedPage,
    ActivitiesPage,
    ProjectworkPage
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, config),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    LoginModule,
    HttpModule,
    TooltipsModule,
    BrowserAnimationsModule
    //TabsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SkillsPage,
    ContactPage,
    HomePage,
    //TabsPage,
    WelcomePage,
    Login,
    RegisterPage,
    ProfilePage,
    TargetedPage,
    ActivitiesPage,
    ProjectworkPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
