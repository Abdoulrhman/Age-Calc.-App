import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { SecondPage } from './../second/second';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  personName:string;

  constructor(private navCtrl: NavController, private navParams: NavParams) {

  }


  showGreeting(name: string){
    this.navCtrl.push(SecondPage, {
      name:this.personName
    })
  }

}
