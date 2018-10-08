import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { SMS } from '@ionic-native/sms';
import { Contacts } from '@ionic-native/contacts';
import * as moment from 'moment';
import { AboutPage } from '../about/about';
import { DatabaseProvider } from '../../providers/database/database';
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
 // name ;
  peronalisedMsg
  //sms ;
  graduation = this.navParams.get("graduation")
  message ;

  date = new Date() ;
  countDown = this.navParams.get("countDown")

  chosenDate =this.navParams.get("chosenDate");
  chosenTime =this.navParams.get("chosenTime");
  name = this.navParams.get("name");
  categoryChosen = this.navParams.get("categoryChosen") ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController, private localNotifications: LocalNotifications,private sms:SMS, private contacts: Contacts, private db:DatabaseProvider ) {
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


  autoMessagessssss(message){

   let date = moment(this.chosenDate + " " + this.chosenTime).format('MMMM DD YYYY, h:mm:ss a');
   
     console.log(date);
     alert(message);
    


 this.localNotifications.schedule({
     text: this.chosenDate+ this.name,
     trigger: {at: new Date(new Date(date) )} ,
 })
  
    this.db.saveSentMessages(this.name ,message, this.chosenDate).then(()=>{}, (error)=>{
      
    }) ;
   this.navCtrl.push(AboutPage,{automessage:message, countDown:this.countDown} )




  //   alert(message);
  //     const actionSheet = this.actionSheetCtrl.create({
  //       title: 'Modify your album',
  //       buttons: [
  //         {
  //           text: 'SMS',
  //           role: 'destructive',
  //           handler: () => {
  //             console.log(this.message);

  //             this.contactss();
  //           }
  //         },{
  //           text: 'Archive',
  //           handler: () => {
  //             console.log('Archive clicked');
  //           }
  //         },{
  //           text: 'Cancel',
  //           role: 'cancel',
  //           handler: () => {
  //             console.log('Cancel clicked');
  //           }
  //         }
  //       ]
  //     });
  //  actionSheet.present();
      
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
