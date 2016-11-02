import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userInfo:any;

  constructor(public navCtrl:NavController, public navParams:NavParams) {
 
    this.userInfo =JSON.stringify(navParams.get("user"));
    console.log("homePage", this.userInfo);
   // this.navCtrl.push(this.startPage);
  }

}
