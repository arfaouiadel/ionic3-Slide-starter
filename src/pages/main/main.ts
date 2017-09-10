import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  signIn() {

   this.navCtrl.push(LoginPage);
    
  }

  register() {
    
       this.navCtrl.push(RegisterPage);
        
      }

}
