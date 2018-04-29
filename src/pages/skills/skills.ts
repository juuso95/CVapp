//Juuso Kivisto, 1701442
//Heimo Kaukonen, 1601560
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html'
})
export class SkillsPage {
  information: any[];

  constructor(public navCtrl: NavController, private http: Http) {
    let localData = http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })

  }
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
 

}
