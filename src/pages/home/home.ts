import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database' ;
import { AutomatePage } from '../automate/automate';
import { MessagePage } from '../message/message';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController , private db:DatabaseProvider) {

  }


  graduation(){
this.db.GraduationMessages().then((data:any)=>{

  console.log(data);
  this.navCtrl.push(MessagePage  , {graduationMsg:data} )
  
} , (error)=>{})

  }


  wedding(){
    this.db.weddingMessage().then((data:any)=>{

      console.log(data);
      this.navCtrl.push(MessagePage  , {graduationMsg:data} )
      
    } , (error)=>{})
    

  }
  anniversary(){
    this.db.anniversaryMessage().then((data:any)=>{

      console.log(data);
      this.navCtrl.push(MessagePage  , {graduationMsg:data} )
      
    } , (error)=>{})
    

  }
  newJob(){
    this.db.newJobMessage().then((data:any)=>{

      console.log(data);
      this.navCtrl.push(MessagePage  , {graduationMsg:data} )
      
    } , (error)=>{})
    

  }
  babyShower(){
    this.db.babyShowerMessages().then((data:any)=>{

      console.log(data);
      this.navCtrl.push(MessagePage  , {graduationMsg:data} )
      
    } , (error)=>{})
    

  }
  birthday(){
    this.db.birthdayMessages().then((data:any)=>{

      console.log(data);
      this.navCtrl.push(MessagePage  , {graduationMsg:data} )
      
    } , (error)=>{})
    

  }
}
