import { Component } from '@angular/core';
import { NavController,AlertController} from 'ionic-angular';
import { ViewPage } from '../view/view';

declare var firebase


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  sentMessages = []

  constructor(public navCtrl: NavController , private alertCtrl :AlertController) {
    this.sentMessages=[];

    var users= firebase.auth().currentUser;
    console.log(users.uid);
    firebase.database().ref("messagesent/"+users.uid).on('value', (data: any) => {
    var name = data.val();
   
   
      if (name !== null) {
   
   
        var keys: any = Object.keys(name);
   
        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
   
          let  obj = {
           message: name[k].message,
            name: name[k].name,
            key: k ,
   
            date:name[k].date
   
            }
          this.sentMessages.push(obj);
   
          console.log(this.sentMessages);
        };
      } else{
        const alert = this.alertCtrl.create({
          title: 'Confirmation',
          subTitle: 'YOUR DONT HAVE Sent Messages CURRENTLY',
          buttons: ['OK']
        });
        alert.present();
      }
   
   
   
   
   })
  }
view(){
  this.navCtrl.push(ViewPage)
}
  }

