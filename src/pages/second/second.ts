import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  personName:string;
  public birthdate: Date;
  public age: any;


  constructor(private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {

    this.personName = this.navParams.get('name')
  }


  public CalculateAge(): void
     {
         if(this.birthdate){
            var timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
            //Used Math.floor instead of Math.ceil
            //so 26 years and 140 days would be considered as 26, not 27.
            this.age =  Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
        }
    }


  ionViewDidLoad() {
    this.toast.create({
      message:` Hello Mr/Mrs ${this.personName}`,
      duration:9000
    }).present(); 
  }

  

}
