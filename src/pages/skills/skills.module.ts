import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkillsPage } from './skills';
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
  declarations: [
    SkillsPage,
  ],
  imports: [
    IonicPageModule.forChild(SkillsPage),
    TooltipsModule
  ],
})
export class AboutPageModule {}

