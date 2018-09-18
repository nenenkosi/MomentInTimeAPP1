import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController,ModalController,AlertController  } from 'ionic-angular';
import { AutomatePage } from '../automate/automate';
import { PersonalizedPage } from '../personalized/personalized';
import { AdminPage } from '../admin/admin';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  graduationMsg = this.navParams.get("graduationMsg");
  weddingMsg = this.navParams.get("weddingMsg");
  newJobMsg = this.navParams.get("newJobMsg");
  birthdayMsg = this.navParams.get("birthdayMsg");
  babyShowerMsg = this.navParams.get("babyShowerMsg");
  anniversaryMsg = this.navParams.get("anniversaryMsg");

  peronalisedMsg = this.navParams.get("peronalisedMsg") ;

phoneNumber;
name;
date ;
time ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController,public modalCtrl: ModalController,public alertCtrl: AlertController ,private sms: SMS , private socialSharing: SocialSharing,private contacts: Contacts) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
    console.log(this.graduationMsg);

    console.log(this.peronalisedMsg);
    
  }
  

  

  message() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Choose message type',
      buttons: [
        {
          text: 'Personalize Message',
          handler: () => {
           
            this.navCtrl.push(PersonalizedPage ,{chosenDate:this.date , chosenTime:this.time}) ;
          }
        },{
          text: 'Automated Message',
          handler: () => {
          
            this.navCtrl.push(AutomatePage , {graduation:this.graduationMsg})
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


  
}
