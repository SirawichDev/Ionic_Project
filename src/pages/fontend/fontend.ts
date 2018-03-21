import { ShowPage } from './result_show/res';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-fontend',
  templateUrl: 'fontend.html',
})
export class FontendPage {
  constructor (private navCtrl: NavController){}

  Showme(name:string){
    this.navCtrl.push(ShowPage,{userName: name});
  }

}
