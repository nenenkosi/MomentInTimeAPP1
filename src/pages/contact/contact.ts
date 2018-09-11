import { Component } from '@angular/core';
import { NavController, ActionSheetController,ModalController,AlertController } from 'ionic-angular';
import { AutomatePage } from '../automate/automate';
import { PersonalizedPage } from '../personalized/personalized';
import { AdminPage } from '../admin/admin';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController,public modalCtrl: ModalController,public alertCtrl: AlertController) {

  }
  sendvia() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Send Via',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
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



  message(){
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
     
      buttons: [
        {
          text: 'personalized',
          handler: data => {
            const modal = this.modalCtrl.create(PersonalizedPage);
            modal.present();
          }
        },
        {
          text: 'automated',
          handler: data => {
            const modal = this.modalCtrl.create(AutomatePage);
            modal.present();
          }
        }
      ]
    });
    prompt.present();
  }

  tabss(){
    this.navCtrl.push(AdminPage) ;
  }
  }

