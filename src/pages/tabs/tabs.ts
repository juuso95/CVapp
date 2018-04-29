//Juuso Kivisto, 1701442


import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { SkillsPage } from '../skills/skills';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
//import { GymsPage } from '../gyms/gyms';
import { ProfilePage } from '../profile/profile';
import { TargetedPage } from '../targeted/targeted';
import { ProjectworkPage } from '../projectwork/projectwork';
import { ActivitiesPage } from '../activities/activities';
//import { IonicPageModule } from "ionic-angular";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {


  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = TargetedPage;
  tab4Root = SkillsPage;
  tab5Root = ProjectworkPage;
  tab6Root = ActivitiesPage;
  tab7Root = ContactPage;

  constructor() {

  }
}
