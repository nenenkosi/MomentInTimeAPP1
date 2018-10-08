
 
//           }
//         }
//       ]
//     });
//     confirm.present();
 
  
    
   
    




import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController , ActionSheetController } from 'ionic-angular';
import { MessagePage } from '../message/message';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { TabsPage } from '../tabs/tabs';
import { LocalNotifications } from '@ionic-native/local-notifications';
import * as moment from 'moment';
declare var firebase
import {DatabaseProvider} from '../../providers/database/database';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
/**
 * Generated class for the PersonalizedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-personalized',
  templateUrl: 'personalized.html',
})
export class PersonalizedPage {
  //message ;
  phoneNumber ;
  peronalisedMsg
  //sms ;
  message ;
  countDown = this.navParams.get('countDown');
  chosenDate =this.navParams.get("chosenDate");
  chosenTime =this.navParams.get("chosenTime");
  name = this.navParams.get("name");
  categoryChosen = this.navParams.get("categoryChosen") ;
  date = new Date() ;
  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts, public alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController, private localNotifications: LocalNotifications,private sms:SMS ,private socialSharing:SocialSharing, private db:DatabaseProvider) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalizedPage');
    console.log(this.countDown);
    
    console.log(this.chosenDate);
    console.log(this.chosenTime);
    console.log(this.name);
    console.log(this.categoryChosen);
    
    
    
    
    
    
  }
  
  back(){
    this.navCtrl.push(MessagePage);
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
  sendviaWhatsApp(){
    this.socialSharing.shareViaWhatsApp(this.message , null , null).then((data)=>{
      console.log(data);
      
 
    } , (error)=>{
 
    })
 
  }
  sendviaFacebook(){
    this.socialSharing.shareViaFacebook(this.message , null , null).then(()=>{} , (error)=>{})
  }
  sendViaemail(){
    this.socialSharing.shareViaEmail(this.message ,null ,null).then(()=>{
      
    } , 
    
    
    
    (error)=>{
    })
  }
  sendvia() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'SMS',
          role: 'destructive',
          handler: () => {
            this.contactss();
          }
        },
        {
          text: 'Email',
          role: 'destructive',
          handler: () => {
            this.sendViaemail();
            
          }
        },
        
        {
          text: 'WhatsAPP',
          handler: () => {
         
         this.sendviaWhatsApp();
          }
        },{
          text: 'Facebook',
          role: 'cancel',
          handler: () => {
           this.sendviaFacebook() ;
          }
        }
      ]
    });
 actionSheet.present();
    setTimeout(()=>{ this.showConfirm() }, 10000);
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
          text: 'Set Rimender',
          handler: () => {
           
           
        
           
         
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
 
  
  schedule(){

    alert("clicked");
    
    let date = moment(this.chosenDate + " " + this.chosenTime).format('MMMM DD YYYY, h:mm:ss a');
   
    console.log(date);
    
   this.localNotifications.schedule({
     text: this.chosenDate+ this.name,
     icon: 'http://example.com/icon.png' ,
     trigger: {at: new Date(new Date(date) )} ,
   })
   this.db.saveSentMessages(this.name ,this.message, this.chosenDate).then(()=>{} , (error)=>{})
   this.navCtrl.push(AboutPage,{date:this.chosenDate, name:this.name, countDown:this.countDown,  chosenCategory:this.categoryChosen})

  }


}