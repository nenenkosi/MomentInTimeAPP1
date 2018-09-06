import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

declare var firebase ;

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DatabaseProvider Provider');
  }



  register(email , password){ 
    return new Promise((resolve, reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email , password) ;
      resolve();

 })

 }

 login(email , password){
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
    firebase.auth().sendPasswordResetEmail(email ) ;
    resolve();

})

}

}
