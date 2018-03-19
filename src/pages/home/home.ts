import { FontendPage } from './../fontend/fontend';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  GotoFrontend(){
    this.navCtrl.push(FontendPage);
  }

}
