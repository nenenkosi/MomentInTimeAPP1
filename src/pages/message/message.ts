import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController,ModalController,AlertController  } from 'ionic-angular';
import { AutomatePage } from '../automate/automate';
import { PersonalizedPage } from '../personalized/personalized';
import { AdminPage } from '../admin/admin';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { TabsPage } from '../tabs/tabs';
import { EventPage } from '../event/event';
import *as moment from 'moment'

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

  categoryChosen = this.navParams.get("categoryChosen") ;

phoneNumber;
name;
myDate
time ;
countDown;

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController,public modalCtrl: ModalController,public alertCtrl: AlertController ,private sms: SMS , private socialSharing: SocialSharing,private contacts: Contacts) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
    console.log(this.graduationMsg);

    console.log(this.peronalisedMsg);
    console.log(this.categoryChosen);
    
    
  }
  

  chooseDate(){

    let d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var today = year + "-" + '0' + month + "-" +  day + "T" + hour +":"+ minute +":"+ second;
    this.countDown= moment(this.myDate).fromNow();
    console.log(today);
    console.log(this.myDate);
    console.log(this.countDown);
 
 if( this.myDate == undefined){
  
  const alert = this.alertCtrl.create({
    title: 'Alert',
    subTitle: "You need to set date and time",
    buttons: ['OK']
  });
  alert.present();
 }


else{
  this.message() ;}

 
    }
  
  message() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Choose message type',
      buttons: [
        {
          text: 'Personalize Message',
          handler: () => {
           
            this.navCtrl.push(PersonalizedPage ,{chosenDate:this.myDate , chosenTime:this.time, name:this.name ,categoryChosen:this.categoryChosen, countDown:this.countDown}) ;
          }
        },{
          text: 'Automated Message',
          handler: () => {
          
            this.navCtrl.push(AutomatePage , {graduation:this.graduationMsg, chosenDate:this.myDate , chosenTime:this.time, name:this.name ,categoryChosen:this.categoryChosen,  countDown:this.countDown})
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

back(){
  this.navCtrl.push(EventPage)
}

ngAfterViewInit() {
  let tabs = document.querySelectorAll('.show-tabbar');
  if (tabs !== null) {
      Object.keys(tabs).map((key) => {
          tabs[key].style.display = 'none';
      });
  }
}
ionViewWillLeave() {
  let tabs = document.querySelectorAll('.show-tabbar');
  if (tabs !== null) {
      Object.keys(tabs).map((key) => {
          tabs[key].style.display = 'flex';
      });

  }
}


  
}
