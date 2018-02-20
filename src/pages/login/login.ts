import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage} from '../loggedin/loggedin';
import { TabsPage} from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(private alertCtrl:AlertController,private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message:string){
    this.alertCtrl.create({
      title:"Info",
      subTitle:message,
      buttons:['OK']
    }).present();
  }

  Login() {
    this.fire.auth.signInWithEmailAndPassword(this.uname.value,this.password.value)
    .then (data=> {
      console.log('got some data',data);
      this.alert('Success! You\'re logged in');
      this.navCtrl.setRoot( TabsPage );
      //user is logged in
    })
    .catch(error => {
      console.log('got an error',error);
      this.alert(error.message);
    });
  }

}
