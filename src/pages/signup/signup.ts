import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";

@Component({
    templateUrl: "signup.html"
})

export class SignUpPage {
    public fullName: string;
    public age: number;
    public phoneNumber: string;
    public email:string;
    public password: string;

    public constructor(private navCtrl: NavController, public alertCtrl: AlertController) {
        this.fullName = "";
        this.age = 0;
        this.phoneNumber = "";
        this.password = "";
        this.email="";
    }

    public doSignup(){
        let confirm = this.alertCtrl.create({
            title:"Are you sure ?",
            message: "Click OK to continue",
            buttons: [
                {
                text: 'No, Quit',
                handler: () => {
                    console.log('Disagree clicked', this);
                }
                },
                {
                text: 'OK, Next',
                handler: () => {
                    console.log('Agree clicked');
                }
                }
            ]
            });
            confirm.present();
    }
}