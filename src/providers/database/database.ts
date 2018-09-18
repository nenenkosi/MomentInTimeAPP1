import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
declare var firebase ;

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  graduationArray = [];
  weddingArray=[];
  birthdayArray=[];
  anniversaryArray=[];
  babyShowerArray=[];
  newJobArray=[];
  provider = new firebase.auth.GoogleAuthProvider();

  constructor(public http: HttpClient,private fire:AngularFireAuth) {
    console.log('Hello DatabaseProvider Provider');
  }



  register(email , password , name){
    var users= firebase.auth().currentUser;

    return new Promise((resolve, reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email , password) .then(()=>{
        firebase.database().ref("user/"+ users.uid).set({
          name:name
        })
        resolve();
      } , (error)=>{
        reject(error);
      });
 
 
 })
 
 }

 login(email , password){

  //firebase.auth().signInWithEmail()
  return new Promise((resolve, reject)=>{
    firebase.auth().signInWithEmailAndPassword(email , password).then(()=>{
      resolve();
    }, Error =>{
      reject(Error)
    }) ;
  
   
})


}




forgetPassword(email){

  return new Promise((resolve, reject)=>{
    firebase.auth().sendPasswordResetEmail(email) .then(()=> {

      resolve();
    } , (error)=>{
      reject(error)

    })
    

})

}



SignWithGoogle(){
  var users= firebase.auth().currentUser;
  this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

   return firebase.auth().signInWithPopup(this.provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
   

      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      var res =result.user.displayName.split(" ")
      console.log(user);

      firebase.database().ref("user/"+ users.uid).set({
        email:user.email ,
        username:user.displayName  ,
        name:{
          first:res[0],
          middle:res[1] ,
          last:res[2]
        }
      })
    
   
    
    
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.d
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

  

}
// logInWithFaceBook
logInWithFaceBook(){
  this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res=>{
    console.log(res);
 
  })
 
 }


 anniversaryMessage(){
  return new Promise((resolve, reject)=>{
    firebase.database().ref('category/'+ 'ANNIVERSARY' ).on('value', (data: any) => {

      var message = data.val();
       console.log(data.val());
 
       var keys: any = Object.keys(message);
 
       console.log(keys);
 
       for (var i = 0; i < keys.length; i++){
        var k = keys[i];
 
        let obj = {
          k:keys ,
          message:message[k].message
 
        }
        this.anniversaryArray.push(obj)

        resolve(this.anniversaryArray);
  }
 
 
  })

 })
  

 }

birthdayMessages(){
  return new Promise((resolve, reject)=>{
    firebase.database().ref('category/'+ 'Other' ).on('value', (data: any) => {

      var message = data.val();
       console.log(data.val());
 
       var keys: any = Object.keys(message);
 
       console.log(keys);
 
       for (var i = 0; i < keys.length; i++){
        var k = keys[i];
 
        let obj = {
          k:keys ,
          message:message[k].message
 
        }
        this.birthdayArray.push(obj)

        resolve(this.birthdayArray);
  }
 
 
  })

 })
  

}

babyShowerMessages(){
  return new Promise((resolve, reject)=>{
    firebase.database().ref('category/'+ 'babyShower' ).on('value', (data: any) => {

      var message = data.val();
       console.log(data.val());
 
       var keys: any = Object.keys(message);
 
       console.log(keys);
 
       for (var i = 0; i < keys.length; i++){
        var k = keys[i];
 
        let obj = {
          k:keys ,
          message:message[k].message
 
        }
        this.babyShowerArray.push(obj)

        resolve(this.babyShowerArray);
  }
 
 
  })

 })
  


}


GraduationMessages(){
  return new Promise((resolve, reject)=>{
    firebase.database().ref('category/'+ 'Graduation' ).on('value', (data: any) => {

      var message = data.val();
       console.log(data.val());
 
       var keys: any = Object.keys(message);
 
       console.log(keys);
 
       for (var i = 0; i < keys.length; i++){
        var k = keys[i];
 
        let obj = {
          k:keys ,
          message:message[k].message
 
        }
        this.graduationArray.push(obj)

        resolve(this.graduationArray);
  }
 
 
  })

 })
  



}

weddingMessage(){
  return new Promise((resolve, reject)=>{
    firebase.database().ref('category/'+ 'Weddings' ).on('value', (data: any) => {

      var message = data.val();
       console.log(data.val());
 
       var keys: any = Object.keys(message);
 
       console.log(keys);
 
       for (var i = 0; i < keys.length; i++){
        var k = keys[i];
 
        let obj = {
          k:keys ,
          message:message[k].message
 
        }
        this.weddingArray.push(obj)

        resolve(this.weddingArray);
  }
 
 
  })

 })
  

}

newJobMessage(){
  return new Promise((resolve, reject)=>{
    firebase.database().ref('category/'+ 'newJob' ).on('value', (data: any) => {

      var message = data.val();
       console.log(data.val());
 
       var keys: any = Object.keys(message);
 
       console.log(keys);
 
       for (var i = 0; i < keys.length; i++){
        var k = keys[i];
 
        let obj = {
          k:keys ,
          message:message[k].message
 
        }
        this.newJobArray.push(obj)

        resolve(this.newJobArray);
  }
 
 
  })

 })


}

}
