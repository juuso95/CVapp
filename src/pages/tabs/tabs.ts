//Juuso Kivisto, 1701442
//Heimo Kaukonen, 1601560

import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { GymsPage } from '../gyms/gyms';
import { ProfilePage } from '../profile/profile';
//import { IonicPageModule } from "ionic-angular";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = GymsPage;
  tab4Root = ProfilePage;
  tab5Root = ContactPage;

  constructor() {

  }
}
