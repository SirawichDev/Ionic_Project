import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
    selector: 'result-page',
    templateUrl:'res.html'
})
export class ShowPage implements OnInit{
    name:string;
    constructor (private navParam: NavParams,
    private Nav:NavController) {}

    ngOnInit(){
       
        this.name = this.navParam.get('Clicked');
    }
    Goback(){
        //this.Nav.pop(); pre page
        this.Nav.popToRoot();
    }

}
