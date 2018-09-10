import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {user} from '../model/user'
import {DatabaseProvider} from '../../providers/database/database' ;
import { ToastController } from 'ionic-angular';
import {HomePage} from '../../pages/home/home'

import { AlertController } from 'ionic-angular';
declare var firebase

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as user ;


  constructor(public navCtrl: NavController, public navParams: NavParams ,private db:DatabaseProvider, public toastCtrl: ToastController,public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  Register(user:user){
    console.log(user.name);
    
  
    if(this.user.email !=null  && this.user.password  !=null  && this.user.name !=null ){
    this.db.register(user.email ,user.password, user.name).then(()=>{
      const toast = this.toastCtrl.create({
        message: 'Successfully Registered',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
      
    } , (error)=>{
 
 
      const alert = this.alertCtrl.create({
        title: 'warning!',
        subTitle:error.message,
        buttons: ['OK']
      });
      alert.present();
     
 
    })
  }else{
    const alert = this.alertCtrl.create({
      title: 'warning!',
      subTitle:  'Please enter email and password' ,
      buttons: ['OK']
    });
    alert.present();
  }
  }


  google(){
  this.db.SignWithGoogle()


    
  }

}
