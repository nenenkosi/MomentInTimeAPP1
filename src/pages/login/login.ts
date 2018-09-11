import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {user} from '../model/user'
import {DatabaseProvider} from '../../providers/database/database' ;
import { RegisterPage } from '../register/register';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {AdminPage} from '../admin/admin'
import { THIS_EXPR } from '../../../node_modules/@angular/compiler/src/output/output_ast';

declare var firebase
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

  constructor(public navCtrl: NavController, public navParams: NavParams , private db:DatabaseProvider ,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Login(user:user){

    var users = firebase.auth().currentUser.uid;

    if(user.email !=undefined && user.password !=undefined){
      this.db.login(user.email ,user.password).then(()=>{
        
        firebase.database().ref("user/" +users).set({
        })
       
      } ,(error)=>{
        const alert = this.alertCtrl.create({
          title: 'CONFIRMATION',
          subTitle:  error,
          buttons: ['OK']
        });
        alert.present();
  
      })
    }else{
      const alert = this.alertCtrl.create({
        title: 'Confirmarion',
        subTitle: 'Please all details',
        buttons: ['OK']
      });
      alert.present();
    }
   


  }

  forgetPassword(user:user){
    this.db.forgetPassword(user.email).then(()=>{
      alert("success")
    } , (error)=>{

    })
  }
// remove after am done  its for navigation to register
  de(){
    this.navCtrl.push(RegisterPage)
  }
  admin(){
    this.navCtrl.push(AdminPage)

    


  }


  logInWithFaceBook(){
    this.db.logInWithFaceBook();
  }
}
