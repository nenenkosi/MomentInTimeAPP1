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
  name ;
  peronalisedMsg
  //sms ;
  message ;

  chosenDate =this.navParams.get("chosenDate");
  chosenTime =this.navParams.get("chosenTime");

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts, public alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController, private localNotifications: LocalNotifications,private sms:SMS ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalizedPage');
    console.log(this.chosenDate);
    console.log(this.chosenTime);
    
    
    
    
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
          text: 'Schedule',
          handler: () => {
           
           
          //  this.chosenDate = moment(this.chosenDate + " " + this.chosenTime.format('MMMM DD YYYY, h:mm:ss a')) ;
          
           
        
        
        
          //  this.localNotifications.schedule({
          //    text: 'MomementInTime',
          //    trigger: {at: new Date(new Date(this.chosenDate) )
          //   }
          
          //  })
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
    var user = firebase.auth().currentUser.uid;
    console.log(user);
    
    firebase.database().ref('momentsintime/').push({
      sent:this.name,
      cell:this.phoneNumber,
      Message:this.message,
      user: user

    });
    
  }
 
  // sendvia() {
  //   const actionSheet = this.actionSheetCtrl.create({
  //     title: 'Send Via',
  //     buttons: [
  //       {
  //         text: 'SMS',
  //         role: 'SMS',
  //         handler: () => {
  //           const prompt = this.alertCtrl.create({
  //     title: 'Send SMS',
  //     // message: " ",
  //     inputs: [
  //       {
  //         name: 'phoneNumber',
  //         placeholder: 'Enter phone number'
  //       },

  //       {
  //         name: 'message',
  //         placeholder: this.peronalisedMsg ,
  //         value:this.peronalisedMsg 
          
  //       },

  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Send',
  //         handler: data => {
  //           console.log(data.phoneNumber);
  //           console.log(data.message)
            
  //           this.sms.send(data.phoneNumber, this.peronalisedMsg).then(()=>{
  //             const alert = this.alertCtrl.create({
  //               title: 'SMS',
  //               subTitle: 'Message sent',
  //               buttons: ['OK']
  //             });
  //             alert.present();
  //           } , (error)=>{
  //             alert(error)

  //           }) 
            

  //         }
  //       }
  //     ]
  //   });
  //   prompt.present();


           
  //}
          
       // },
       
       //{
         // text: 'Cancel',
         // role: 'cancel',
         // handler: () => {
           // console.log('Cancel clicked');
         // }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }

  

}
