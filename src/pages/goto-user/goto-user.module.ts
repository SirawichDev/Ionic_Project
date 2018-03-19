import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GotoUserPage } from './goto-user';

@NgModule({
  declarations: [
    GotoUserPage,
  ],
  imports: [
    IonicPageModule.forChild(GotoUserPage),
  ],
})
export class GotoUserPageModule {}
