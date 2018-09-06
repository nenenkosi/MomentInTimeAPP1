import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {user} from '../model/user'
import {DatabaseProvider} from '../../providers/database/database' ;

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

  user = {} as user ;

  constructor(public navCtrl: NavController, public navParams: NavParams , private db:DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Login(user:user){
    this.db.login(user.email ,user.password).then(()=>{
      alert("sucess")
    } ,(error)=>{

    })


  }

  forgetPassword(user:user){
    this.db.forgetPassword(user.email).then(()=>{
      alert("success")
    } , (error)=>{

    })
  }

}
