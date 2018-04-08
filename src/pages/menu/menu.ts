//Juuso Kivisto, 1701442
//Heimo Kaukonen, 1601560

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';
import { Login } from '../login/login';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?:  number;
  icon: string;
}


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  

rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;


   // Adding all components which are in the navigation menu
  pages: PageInterface[] = [
    { title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home'},
    { title: 'Muscle Groups', pageName: 'AboutPage', tabComponent: 'AboutPage', index: 1, icon: 'podium'},
    { title: 'Contact us', pageName: 'ContactPage', index: 2, icon: 'contacts'}//,
    //{ title: 'Project Work', pageName: 'ProjectworkPage', index: 3, icon: 'folder'},
    //{ title: 'Targeted CV', pageName: 'TargetedPage', index: 4, icon: 'clipboard'},
    //{ title: 'Curriculum activities', pageName: 'ActivitiesPage', index: 5, icon: 'trophy'}

  ]
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }
  

  // Rooting the buttons
  openPage(page: PageInterface){
    let params ={};
    
    if(page.index){
      params = {tabIndex: page.index};
    }
    if(this.nav.getActiveChildNav() && page.index != undefined){
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  } 
   // Rooting the button which opens the navigation menu 
  isActive(page: PageInterface){
    let childNav=this.nav.getActiveChildNav();

    if(childNav){
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
  }
  // Creating the logout feature
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  
  logout() {
    const root = this.app.getRootNav();
    root.setRoot(Login);
      
    }
  
}