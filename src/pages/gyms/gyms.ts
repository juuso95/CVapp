import { Component, ViewChild, ElementRef, NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


declare var google;
//var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//var labelIndex = 0;
@IonicPage()
@Component({
  selector: 'page-gyms',
  templateUrl: 'gyms.html',
})
export class GymsPage {
@ViewChild('map') mapElement: ElementRef;
map: any;
markerBounds: any;
markers=[{id:"Forever",lat:60.1566602, lng:24.7502819},
{id:"Fitnes24Seven", lat:60.2596833, lng:24.8527134},
{id:"ELIXIA",lat:60.1639152, lng:24.7335197},  //label: labels[labelIndex++ % labels.length]
{id:"Fressi",lat:60.2169069, lng:24.8164506},
{id:"Fit1",lat:60.2214864, lng:24.8101008}]; //, icon:"assets/imgs/logo4.png"

constructor(public navCtrl: NavController,
 public navParams: NavParams, 
 public geolocation: Geolocation,
 public modalCtrl: ModalController) {
this.ionViewLoaded();
}
ionViewLoaded(){
   this.loadMap();
 }
loadMap(){
     this.markerBounds = new google.maps.LatLngBounds();
     this.geolocation.getCurrentPosition().then((position) => {
 
       let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
       let mapOptions = {
         center: latLng,
         mapTypeId: google.maps.MapTypeId.ROADMAP
       }
 
       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
       this.addMarker()// current
       this.addMarkersToMap()
     }, (err) => {
       console.log(err);
     });
 
   }
   
   addMarker(){
     var icon = {
       url: "assets/images/mapp.png", // url
       scaledSize: new google.maps.Size(60, 70), // scaled size
       origin: new google.maps.Point(0,0), // origin
       anchor: new google.maps.Point(0, 70) // anchor
     };
     var markerdata ={
         map: this.map,
         animation: google.maps.Animation.DROP,
         position: this.map.getCenter()
         ,icon:icon 
     }
     let marker = new google.maps.Marker(markerdata);
     marker.setMap(this.map);
     this.markerBounds.extend( this.map.getCenter());
   }
 
   addMarkersToMap() {
       for(let item of this.markers) {
           var icon = {
               //url: item.icon, // url
               scaledSize: new google.maps.Size(40, 60), // scaled size
               origin: new google.maps.Point(0,0), // origin
               anchor: new google.maps.Point(0, 60) // anchor
           };

          var position = new google.maps.LatLng(item.lat, item.lng); 
           var markerdata={position: position,icon:icon, title: item.id.toString()}
           var marker = new google.maps.Marker(markerdata);
           marker.setMap(this.map);
           this.markerBounds.extend(position);
       }
       this.map.fitBounds(this.markerBounds);
       this.map.setCenter(this.markerBounds.getCenter());
   }   

  presentModal() { 
    let modal = this.modalCtrl.create('CategoryPage');
    modal.present();
  }
}