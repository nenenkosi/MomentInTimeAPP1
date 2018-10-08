import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

declare var firebase ;

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  name ;
  userid ;
  favouriteArray =[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController, private camera: Camera) {

    var users= firebase.auth().currentUser;
        //console.log(users.email);

    this.name =users.email;
    console.log(this.name);
    this. userid=users.uid
    console.log(this.userid);


  }

   ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');

    
    firebase.database().ref("likedPictures/"+this.userid).on('value', 
    
    
    
    
    
    
    (data: any) => {
      var name = data.val();
        if (name !== null) {
          var keys: any = Object.keys(name);
          for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            let  obj = {
              k:keys ,
              message:name[k].message,
              }
            this.favouriteArray.push(obj);
            console.log(this.favouriteArray);
          };
        } else{
          const alert = this.alertCtrl.create({
            title: 'Confirmation',
            subTitle: 'YOUR DONT HAVE FAVOURITE CURRENTLY',
            buttons: ['OK']
          });
          alert.present();
        }
     })
  }

  async takeApic(){

    try {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      
      const result = await this.camera.getPicture(options);
      const image = 'data:image/jpeg;'+result;
     
      const pictures  = firebase.storage().ref("profile/" );
      pictures.putString(image, 'data_url')
  
    
  
      
    } catch (error) {
      console.log(error);
      
      
    }
    
  }

}
