import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'result-page',
    templateUrl:'res.html'
})
export class ShowPage implements OnInit{
    name:string;
    constructor (private navParam: NavParams) {}

    ngOnInit(){
        this.name = this.navParam.get('userName');
    }

}