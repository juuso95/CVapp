//Juuso Kivisto, 1701442
//Heimo Kaukonen, 1601560

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  @ViewChild('username') user;
  @ViewChild('password') password;
  nextPage = TabsPage;
  SingupPage = RegisterPage;
  registerCredentials = { user: '', password: '' };

  constructor(private fire: AngularFireAuth, public nav: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
 
  public login() {

    //this.showLoading()
    //this.fire.auth.sendPasswordResetEmail()

    // Fletching the data from FireAuth database
    // When succes, root has set to home page

        this.fire.auth.signInWithEmailAndPassword(this.registerCredentials.user, this.registerCredentials.password)
      .then (data => {
        console.log('got data', data);
        this.alert('Succes, you logged in')
        this.nav.setRoot('MenuPage');
      })
      .catch (error => {
        
        console.log('got and error',error);
        this.alert(error.message);
      })

        console.log('Would sign in with SIGN', this.registerCredentials.user, this.registerCredentials.password);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
