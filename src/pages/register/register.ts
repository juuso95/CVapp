//Juuso Kivisto, 1701442
//Heimo Kaukonen, 1601560

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {AngularFireAuth} from 'angularfire2/auth';
//import { Login } from '../login/login'

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  

  nextPage = TabsPage;
  @ViewChild('username') user;
  @ViewChild('password') password;
  registerCredentials = {firstname: '', lastname: '', user: '', password: ''};

  constructor(private fire: AngularFireAuth,public nav: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  

  public register() {
    
    this.fire.auth.createUserWithEmailAndPassword(this.registerCredentials.user, this.registerCredentials.password)
  .then (data => {
    console.log('got data', data);
    this.alert('Succes, you succesfully registered!')
    this.nav.push('Login')
  })
  .catch (error => {
    this.alert(error.message);
    //this.showError("Error", error);
  })
  console.log('Would register user with REGISTER', this.registerCredentials.user, this.registerCredentials.password);
    //this.createSuccess = true;
    //this.showPopup("Success", "Account created.");
}

 alert(message: string) {
  this.alertCtrl.create({
    title: 'Info',
    subTitle: message,
    buttons: ['OK']
  }).present();
}
}
