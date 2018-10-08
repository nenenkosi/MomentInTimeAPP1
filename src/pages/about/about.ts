import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController , ActionSheetController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { TabsPage } from '../tabs/tabs';
import { LocalNotifications } from '@ionic-native/local-notifications';
import * as moment from 'moment';
declare var firebase
import {DatabaseProvider} from '../../providers/database/database';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  sentMessages = new Array();

  
  phoneNumber ;

  peronalisedMsg
  
  message ;
  name ;

  countDown = this.navParams.get('countDown')
  automessage=this.navParams.get('automessage');
  date = this.navParams.get("date");
  dates = new Date() ;
  chosenCategory = this.navParams.get("chosenCategory");

  

 icon ='close-circle';


  constructor(public navCtrl: NavController, public navParams: NavParams,private contacts: Contacts, public alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController, private localNotifications: LocalNotifications,private sms:SMS ,private socialSharing:SocialSharing, private db:DatabaseProvider) {
    console.log(this.icon);
    
    //console.log(this.automessage);
    console.log(this.chosenCategory);
    
    
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
          icon:this.icon,
          date:name[k].date 
         
          }
        this.sentMessages.push(obj);
     
        console.log(this.sentMessages);
      };
    } else{
      alert("YOU DONT HAVE MESSAGES SCHEDULED")
    }
    
   


})





  }



  
ionViewDidLoad() {
  console.log('ionViewDidLoad PersonalizedPage');
  
  
  
  console.log(this.chosenCategory);
  
  
  
  
  
  
}


  Delete(a){
    var users= firebase.auth().currentUser;
    var userid=users.uid
    
    this.sentMessages = [];
    firebase.database().ref('messagesent/'+userid).child(a).remove();
  }
 
  
  contactss(message){
    this.contacts.pickContact().then((data:any)=>{
    console.log(data);
 
     this.phoneNumber=(data.phoneNumbers[0].value);
      this.name=(data.displayName);
   } , (error)=>{
     alert(error)
   })

   setTimeout(()=>{ this.showConfirm(message) }, 10000);
  }
  sendviaWhatsApp(message){
    this.socialSharing.shareViaWhatsApp(message, null , null).then((data)=>{
      console.log(data);
      this.icon="checkmark-circle";
      
 
    } , (error)=>{
 
    })
 
  }

  sendviaFacebook(message){
    this.socialSharing.shareViaFacebook(this.message , null , null).then(()=>{} , (error)=>{})
    this.icon="checkmark-circle";
  }

  sendViaemail(message){
    this.socialSharing.shareViaEmail(message ,null ,null).then(()=>{
      this.icon="checkmark-circle";
      
    } , 
    
    
    
    (error)=>{

    })

  }

  sendVia(message, key) {

    const actionSheet = this.actionSheetCtrl.create({
      title: 'CHOOSE',
      buttons: [
        {
          text: 'SMS',
          role: 'destructive',
          handler: () => {
            this.contactss(message);
 
            this.db.sentMessage(message, this.name , this.dates).then(()=>{})
            var users= firebase.auth().currentUser;
            var userid=users.uid
 
           this.sentMessages = [];
           firebase.database().ref('messagesent/'+userid).child(key).remove();
 
 
          }
        },
        {
          text: 'Email',
          role: 'destructive',
          handler: () => {
            this.sendViaemail(message );
 
            this.db.sentMessage(message, this.name , this.dates).then(()=>{})
            var users= firebase.auth().currentUser;
            var userid=users.uid
 
           this.sentMessages = [];
           firebase.database().ref('messagesent/'+userid).child(key).remove();
 
          }
        },
 
        {
          text: 'WhatsAPP',
          handler: () => {
 
         this.sendviaWhatsApp(message );
 
         this.db.sentMessage(message, this.name , this.dates).then(()=>{})
         var users= firebase.auth().currentUser;
         var userid=users.uid
 
        this.sentMessages = [];
        firebase.database().ref('messagesent/'+userid).child(key).remove();
 
 
          }
        },{
          text: 'Facebook',
          role: 'cancel',
          handler: () => {
           this.sendviaFacebook(message) ;
 
           this.db.sentMessage(message, this.name , this.dates).then(()=>{})
           var users= firebase.auth().currentUser;
           var userid=users.uid
 
          this.sentMessages = [];
          firebase.database().ref('messagesent/'+userid).child(key).remove();
          }
        }
      ]
    });
 actionSheet.present();
 
  }

  showConfirm(a) {
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
          text: 'Send',
          handler: () => {
 
 
 
        
            this.sms.send(this.phoneNumber, a).then(()=>{
                          alert('success')
                          this.icon="checkmark-circle";
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
