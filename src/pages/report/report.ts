import { Component } from "@angular/core";
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    selector: "page-report",
    templateUrl: "report.html"
})

export class ReportPage {
    constructor(public navCtrl: NavController) {
       // this.navCtrl.push(HomePage);
    }

    fun(){
        this.navCtrl.push(HomePage);
        //this.navCtrl.setRoot(HomePage);
    }
}