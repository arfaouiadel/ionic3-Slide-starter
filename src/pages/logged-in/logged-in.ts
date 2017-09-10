import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the LoggedInPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-logged-in',
  templateUrl: 'logged-in.html',
})
export class LoggedInPage {

  email: string;
  username : string ='';
  message : string ='';


  constructor(public db: AngularFireDatabase ,private fire: AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) {

    this.username = this.navParams.get('username');
    this.email = fire.auth.currentUser.email;
  }


  ionViewDidLoad() {
   
    console.log('ionViewDidLoad LoggedInPage');
  }

}
