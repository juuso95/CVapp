import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GymsPage } from './gyms';

@NgModule({
  declarations: [
    GymsPage,
  ],
  exports: [
    GymsPage
  ],
  imports: [
    IonicPageModule.forChild(GymsPage),
  ],
})
export class GymsPageModule {}
