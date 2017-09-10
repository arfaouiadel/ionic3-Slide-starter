import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedInPage } from '../logged-in/logged-in';
import { ProfilePage } from '../profile/profile'

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController ,private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message:string){

      this.alertCtrl.create({
        title: 'Info!',
        subTitle: message,
        buttons: ['OK']
      }).present();
      

  }


  signInUser() {

    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
    .then(data => {

    console.log('got some data', this.fire.auth.currentUser);
    this.alert('success you are logged');
    this.navCtrl.setRoot(ProfilePage)
    // user logged

    }    
    )
    .catch(Error =>{
      console.log('gott an error', Error);
      this.alert(Error.message);
    })
    console.log(' would sign in with', this.user.value, this.password.value);
  }

}
