import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ReportPage } from '../report/report';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = ReportPage;

  startPage:string;
  userInfo: any;
  public titlePage:string;

  constructor(public navCtrl:NavController, public navParams:NavParams) {
    this.startPage = navParams.get("gotoPage");
    this.userInfo = navParams.get("user");
    console.log(this.userInfo);
   // this.navCtrl.push(this.startPage);
  }
  selectTab(tabName){
    console.log("tab="+tabName);
    this.titlePage= tabName;
  }
  
}
