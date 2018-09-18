import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { SMS } from '@ionic-native/sms';
import { Contacts } from '@ionic-native/contacts';
import * as moment from 'moment';
/**
 * Generated class for the AutomatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-automate',
  templateUrl: 'automate.html',
})
export class AutomatePage {
  phoneNumber ;
  name ;
  peronalisedMsg
  //sms ;
  graduation = this.navParams.get("graduation")
  message ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController, private localNotifications: LocalNotifications,private sms:SMS, private contacts: Contacts ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutomatePage');

    console.log(this.graduation);
    
  }

  contactss(){
    this.contacts.pickContact().then((data:any)=>{
    console.log(data);
 
     this.phoneNumber=(data.phoneNumbers[0].value);
   this.name=(data.displayName);
   } , (error)=>{
     alert(error)
   })
  }


  autoMessagessssss(){

  
      const actionSheet = this.actionSheetCtrl.create({
        title: 'Modify your album',
        buttons: [
          {
            text: 'SMS',
            role: 'destructive',
            handler: () => {
              this.contactss();
            }
          },{
            text: 'Archive',
            handler: () => {
              console.log('Archive clicked');
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
    showConfirm() {
      const confirm = this.alertCtrl.create({
        title: this.name,
        message: this.phoneNumber,
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Schedule',
            handler: () => {
              console.log(this.phoneNumber);
           
              this.sms.send(this.phoneNumber, this.message).then(()=>{
                            alert('success')
                          } , (error)=>{
                            alert(error)
              
                         }) 
   
   
            }
          }
        ]
      });
      confirm.present();
      
    }
  

}
