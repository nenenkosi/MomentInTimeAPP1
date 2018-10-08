webpackJsonp([11],{

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutomatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_contacts__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the AutomatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AutomatePage = /** @class */ (function () {
    function AutomatePage(navCtrl, navParams, alertCtrl, actionSheetCtrl, localNotifications, sms, contacts, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.localNotifications = localNotifications;
        this.sms = sms;
        this.contacts = contacts;
        this.db = db;
        //sms ;
        this.graduation = this.navParams.get("graduation");
        this.date = new Date();
        this.countDown = this.navParams.get("countDown");
        this.chosenDate = this.navParams.get("chosenDate");
        this.chosenTime = this.navParams.get("chosenTime");
        this.name = this.navParams.get("name");
        this.categoryChosen = this.navParams.get("categoryChosen");
    }
    AutomatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AutomatePage');
        console.log(this.graduation);
    };
    AutomatePage.prototype.contactss = function () {
        var _this = this;
        this.contacts.pickContact().then(function (data) {
            console.log(data);
            _this.phoneNumber = (data.phoneNumbers[0].value);
            _this.name = (data.displayName);
        }, function (error) {
            alert(error);
        });
    };
    AutomatePage.prototype.autoMessagessssss = function (message) {
        var date = __WEBPACK_IMPORTED_MODULE_5_moment__(this.chosenDate + " " + this.chosenTime).format('MMMM DD YYYY, h:mm:ss a');
        console.log(date);
        alert(message);
        this.localNotifications.schedule({
            text: this.chosenDate + this.name,
            trigger: { at: new Date(new Date(date)) },
        });
        this.db.saveSentMessages(this.name, message, this.chosenDate).then(function () { }, function (error) {
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__about_about__["a" /* AboutPage */], { automessage: message, countDown: this.countDown });
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
    };
    AutomatePage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.name,
            message: this.phoneNumber,
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Schedule',
                    handler: function () {
                        console.log(_this.phoneNumber);
                        _this.sms.send(_this.phoneNumber, _this.message).then(function () {
                            alert('success');
                        }, function (error) {
                            alert(error);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    AutomatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-automate',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\automate\automate.html"*/'<!--\n\n  Generated template for the AutomatePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar color="b">\n\n    <ion-title>Automated messages</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding  class="background">\n\n\n\n     <ion-card *ngFor="let a of graduation; let u = index"  class="main2" (click)="autoMessagessssss(a.message)">\n\n\n\n      \n\n\n\n       \n\n        <ion-card-content  > \n\n          \n\n   \n\n            <h2> {{a.message}}  </h2>\n\n         \n\n          \n\n   \n\n       </ion-card-content>\n\n      </ion-card>\n\n      '/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\automate\automate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_contacts__["a" /* Contacts */], __WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */]])
    ], AutomatePage);
    return AutomatePage;
}());

//# sourceMappingURL=automate.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalizedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_message__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_contacts__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_database_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about__ = __webpack_require__(82);
// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams ,AlertController , ActionSheetController } from 'ionic-angular';
// import { MessagePage } from '../message/message';
// import { SMS } from '@ionic-native/sms';
// import { SocialSharing } from '@ionic-native/social-sharing';
// import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
// import { TabsPage } from '../tabs/tabs';
// import { LocalNotifications } from '@ionic-native/local-notifications';
// import * as moment from 'moment';
// declare var firebase
// import {DatabaseProvider} from '../../providers/database/database';
// import { LoginPage } from '../login/login';
// import { AboutPage } from '../about/about';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// /**
//  * Generated class for the PersonalizedPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */
// @IonicPage()
// @Component({
//   selector: 'page-personalized',
//template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\personalized\personalized.html"*/'<ion-header >\n\n  <ion-toolbar color="b" >\n\n      <ion-buttons left>\n\n          <button ion-button icon-only color="light" (click)="back()">\n\n            <ion-icon name="arrow-round-back"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n       <ion-title >Personalize</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding no-lines  class="background">\n\n\n\n\n\n  <div class="img" >\n\n    <img src="../../assets/imgs/b4.jpg" alt="">\n\n  </div>\n\n  <br>\n\n\n\n<ion-list>\n\n  <ion-item class="text">\n\n      <ion-textarea placeholder="Type your message....."   [(ngModel)]="message"></ion-textarea>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n<button ion-button block color="dust" round (click)="schedule()">Set Rimender</button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\personalized\personalized.html"*/,
// })
// export class PersonalizedPage {
//   //message ;
//   phoneNumber ;
//   peronalisedMsg
//   //sms ;
//   message ;
//   chosenDate =this.navParams.get("chosenDate");
//   chosenTime =this.navParams.get("chosenTime");
//   name = this.navParams.get("name");
//   categoryChosen = this.navParams.get("categoryChosen") ;
//   date = new Date() ;
//   constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts, public alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController, private localNotifications: LocalNotifications,private sms:SMS ,private socialSharing:SocialSharing, private db:DatabaseProvider) {
//   }
//   ionViewDidLoad() {
//     console.log('ionViewDidLoad PersonalizedPage');
//     console.log(this.chosenDate);
//     console.log(this.chosenTime);
//     console.log(this.name);
//     console.log(this.categoryChosen);
//   }
//   back(){
//     this.navCtrl.push(MessagePage);
//   }
//   contactss(){
//     this.contacts.pickContact().then((data:any)=>{
//     console.log(data);
//      this.phoneNumber=(data.phoneNumbers[0].value);
//    this.name=(data.displayName);
//    } , (error)=>{
//      alert(error)
//    })
//   }
//   sendviaWhatsApp(){
//     this.socialSharing.shareViaWhatsApp(this.message , null , null).then((data)=>{
//       console.log(data);
//     } , (error)=>{
//     })
//   }
//   sendviaFacebook(){
//     this.socialSharing.shareViaFacebook(this.message , null , null).then(()=>{} , (error)=>{})
//   }
//   sendViaemail(){
//     this.socialSharing.shareViaEmail(this.message ,null ,null).then(()=>{
//     } , 
//     (error)=>{
//     })
//   }
//   sendvia() {
//     const actionSheet = this.actionSheetCtrl.create({
//       title: 'Modify your album',
//       buttons: [
//         {
//           text: 'SMS',
//           role: 'destructive',
//           handler: () => {
//             this.contactss();
//           }
//         },
//         {
//           text: 'Email',
//           role: 'destructive',
//           handler: () => {
//             this.sendViaemail();
//           }
//         },
//         {
//           text: 'WhatsAPP',
//           handler: () => {
//          this.sendviaWhatsApp();
//           }
//         },{
//           text: 'Facebook',
//           role: 'cancel',
//           handler: () => {
//            this.sendviaFacebook() ;
//           }
//         }
//       ]
//     });
//  actionSheet.present();
//     setTimeout(()=>{ this.showConfirm() }, 10000);
//   }
//   showConfirm() {
//     const confirm = this.alertCtrl.create({
//       title: this.name,
//       message: this.phoneNumber,
//       buttons: [
//         {
//           text: 'Disagree',
//           handler: () => {
//             console.log('Disagree clicked');
//           }
//         },
//         {
//           text: 'Set Rimender',
//           handler: () => {
//             this.sms.send(this.phoneNumber, this.message).then(()=>{
//                           alert('success')
//                         } , (error)=>{
//                           alert(error)
//                        }) 
//           }
//         }
//       ]
//     });
//     confirm.present();
//   }
//   // sendvia() {
//   //   const actionSheet = this.actionSheetCtrl.create({
//   //     title: 'Send Via',
//   //     buttons: [
//   //       {
//   //         text: 'SMS',
//   //         role: 'SMS',
//   //         handler: () => {
//   //           const prompt = this.alertCtrl.create({
//   //     title: 'Send SMS',
//   //     // message: " ",
//   //     inputs: [
//   //       {
//   //         name: 'phoneNumber',
//   //         placeholder: 'Enter phone number'
//   //       },
//   //       {
//   //         name: 'message',
//   //         placeholder: this.peronalisedMsg ,
//   //         value:this.peronalisedMsg 
//   //       },
//   //     ],
//   //     buttons: [
//   //       {
//   //         text: 'Cancel',
//   //         handler: data => {
//   //           console.log('Cancel clicked');
//   //         }
//   //       },
//   //       {
//   //         text: 'Send',
//   //         handler: data => {
//   //           console.log(data.phoneNumber);
//   //           console.log(data.message)
//   //           this.sms.send(data.phoneNumber, this.peronalisedMsg).then(()=>{
//   //             const alert = this.alertCtrl.create({
//   //               title: 'SMS',
//   //               subTitle: 'Message sent',
//   //               buttons: ['OK']
//   //             });
//   //             alert.present();
//   //           } , (error)=>{
//   //             alert(error)
//   //           }) 
//   //         }
//   //       }
//   //     ]
//   //   });
//   //   prompt.present();
//   //}
//        // },
//        //{
//          // text: 'Cancel',
//          // role: 'cancel',
//          // handler: () => {
//            // console.log('Cancel clicked');
//          // }
//   //       }
//   //     ]
//   //   });
//   //   actionSheet.present();
//   // }
//   schedule(){
//     let date = moment(this.chosenDate + " " + this.chosenTime).format('MMMM DD YYYY, h:mm:ss a');
//     console.log(date);
//    this.localNotifications.schedule({
//      text: this.chosenDate+ this.name,
//      icon: 'http://example.com/icon.png' ,
//      trigger: {at: new Date(new Date(date) )} ,
//    })
//    this.db.saveSentMessages(this.name ,this.message, this.chosenDate).then(()=>{} , (error)=>{}) ;
//    this.navCtrl.push(AboutPage,{date:this.chosenDate})
//   }
// }










/**
 * Generated class for the PersonalizedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalizedPage = /** @class */ (function () {
    function PersonalizedPage(navCtrl, navParams, contacts, alertCtrl, actionSheetCtrl, localNotifications, sms, socialSharing, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contacts = contacts;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.localNotifications = localNotifications;
        this.sms = sms;
        this.socialSharing = socialSharing;
        this.db = db;
        this.countDown = this.navParams.get('countDown');
        this.chosenDate = this.navParams.get("chosenDate");
        this.chosenTime = this.navParams.get("chosenTime");
        this.name = this.navParams.get("name");
        this.categoryChosen = this.navParams.get("categoryChosen");
        this.date = new Date();
    }
    PersonalizedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalizedPage');
        console.log(this.countDown);
        console.log(this.chosenDate);
        console.log(this.chosenTime);
        console.log(this.name);
        console.log(this.categoryChosen);
    };
    PersonalizedPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__message_message__["a" /* MessagePage */]);
    };
    PersonalizedPage.prototype.contactss = function () {
        var _this = this;
        this.contacts.pickContact().then(function (data) {
            console.log(data);
            _this.phoneNumber = (data.phoneNumbers[0].value);
            _this.name = (data.displayName);
        }, function (error) {
            alert(error);
        });
    };
    PersonalizedPage.prototype.sendviaWhatsApp = function () {
        this.socialSharing.shareViaWhatsApp(this.message, null, null).then(function (data) {
            console.log(data);
        }, function (error) {
        });
    };
    PersonalizedPage.prototype.sendviaFacebook = function () {
        this.socialSharing.shareViaFacebook(this.message, null, null).then(function () { }, function (error) { });
    };
    PersonalizedPage.prototype.sendViaemail = function () {
        this.socialSharing.shareViaEmail(this.message, null, null).then(function () {
        }, function (error) {
        });
    };
    PersonalizedPage.prototype.sendvia = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'SMS',
                    role: 'destructive',
                    handler: function () {
                        _this.contactss();
                    }
                },
                {
                    text: 'Email',
                    role: 'destructive',
                    handler: function () {
                        _this.sendViaemail();
                    }
                },
                {
                    text: 'WhatsAPP',
                    handler: function () {
                        _this.sendviaWhatsApp();
                    }
                }, {
                    text: 'Facebook',
                    role: 'cancel',
                    handler: function () {
                        _this.sendviaFacebook();
                    }
                }
            ]
        });
        actionSheet.present();
        setTimeout(function () { _this.showConfirm(); }, 10000);
    };
    PersonalizedPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.name,
            message: this.phoneNumber,
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Set Rimender',
                    handler: function () {
                        _this.sms.send(_this.phoneNumber, _this.message).then(function () {
                            alert('success');
                        }, function (error) {
                            alert(error);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    PersonalizedPage.prototype.schedule = function () {
        alert("clicked");
        var date = __WEBPACK_IMPORTED_MODULE_7_moment__(this.chosenDate + " " + this.chosenTime).format('MMMM DD YYYY, h:mm:ss a');
        console.log(date);
        this.localNotifications.schedule({
            text: this.chosenDate + this.name,
            icon: 'http://example.com/icon.png',
            trigger: { at: new Date(new Date(date)) },
        });
        this.db.saveSentMessages(this.name, this.message, this.chosenDate).then(function () { }, function (error) { });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__about_about__["a" /* AboutPage */], { date: this.chosenDate, name: this.name, countDown: this.countDown });
    };
    PersonalizedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-personalized',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\personalized\personalized.html"*/'<ion-header >\n\n  <ion-toolbar color="b" >\n\n      <ion-buttons left>\n\n          <button ion-button icon-only color="light" (click)="back()">\n\n            <ion-icon name="arrow-round-back"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n       <ion-title >Personalize</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding no-lines  class="background">\n\n\n\n\n\n  <div class="img" >\n\n    <img src="../../assets/imgs/b4.jpg" alt="">\n\n  </div>\n\n  <br>\n\n\n\n<ion-list>\n\n  <ion-item class="text">\n\n      <ion-textarea placeholder="Type your message....."   [(ngModel)]="message"></ion-textarea>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n<button ion-button block color="dust" round (click)="schedule()">Set Rimender</button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\personalized\personalized.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_contacts__["a" /* Contacts */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_8__providers_database_database__["a" /* DatabaseProvider */]])
    ], PersonalizedPage);
    return PersonalizedPage;
}());

//# sourceMappingURL=personalized.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, db, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.user = {};
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.Register = function (user) {
        var _this = this;
        console.log(user.name);
        if (this.user.email != null && this.user.password != null) {
            this.db.register(user.email, user.password, user.name).then(function () {
                var toast = _this.toastCtrl.create({
                    message: 'Successfully Registered',
                    duration: 3000,
                    position: 'end'
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                var alert = _this.alertCtrl.create({
                    title: 'warning!',
                    subTitle: error.message,
                    buttons: ['OK']
                });
                alert.present();
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'warning!',
                subTitle: 'Please enter email and password',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    RegisterPage.prototype.google = function () {
        this.db.SignWithGoogle();
    };
    RegisterPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\register\register.html"*/'<ion-content padding class="background" >\n\n\n\n  <div class="main" > \n\n    <!-- app logo -->\n\n      <div class="logo" >\n\n          <h1>MIT</h1>\n\n          <p>Moment in Time</p>\n\n        </div>\n\n         <!-- end of app logo -->\n\n\n\n        <!-- start inputs section -->\n\n        <div class="inputs">\n\n            <ion-item class="ion-item"  >\n\n              <ion-label ><ion-icon color="light" ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n\n              <ion-input type="userame" value="" placeholder=" Username"[(ngModel)]="user.name"></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item  class="ion-item">\n\n              <ion-label ><ion-icon  color="light" name="mail"></ion-icon></ion-label>\n\n              <ion-input type="email" value="" placeholder="Email" [(ngModel)]="user.email"></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item  class="ion-item" >\n\n              <ion-label><ion-icon color="light"  name="lock"></ion-icon></ion-label>\n\n              <ion-input type="password" placeholder="Password"  [(ngModel)]="user.password"></ion-input>\n\n            </ion-item>\n\n\n\n          \n\n          <div class="button" >\n\n            <button  ion-button round block outline color="light" (click)="Register(user)">Register</button>\n\n            <button block ion-button round class="Login"  color="light" (click)="LoginPage()"> &nbsp; Sign in</button>\n\n          </div>\n\n             </div>\n\n               <!-- close inputs section  -->\n\n            \n\n          </div>\n\n          <!-- close main section -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewPage = /** @class */ (function () {
    function ViewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewPage');
    };
    ViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\view\view.html"*/'<!--\n  Generated template for the ViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color="b">\n    <ion-title>view</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-card-header>\n      Card Header\n    </ion-card-header>\n  \n    <ion-card-content>\n     \n    </ion-card-content>\n  \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\view\view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ViewPage);
    return ViewPage;
}());

//# sourceMappingURL=view.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouriteMessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavouriteMessagesPage = /** @class */ (function () {
    function FavouriteMessagesPage(navCtrl, navParams, db, alertCtrl) {
        // this.db.getFavourite().then((data:any)=>{
        //   console.log(data);
        //   this.favouriteArray.push(data)
        // }, (error)=>{
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.favouriteArray = [];
        // })
        var users = firebase.auth().currentUser;
        var userid = users.uid;
        console.log(userid);
        firebase.database().ref("likedPictures/" + userid).on('value', function (data) {
            var name = data.val();
            if (name !== null) {
                var keys = Object.keys(name);
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
                    var obj = {
                        k: keys,
                        message: name[k].message,
                    };
                    _this.favouriteArray.push(obj);
                    console.log(_this.favouriteArray);
                }
                ;
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Confirmation',
                    subTitle: 'YOUR DONT HAVE FAVOURITE CURRENTLY',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    }
    FavouriteMessagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavouriteMessagesPage');
        console.log(this.favouriteArray);
    };
    FavouriteMessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-favourite-messages',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\favourite-messages\favourite-messages.html"*/'<!--\n  Generated template for the FavouriteMessagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="b">\n    <ion-title>Favourite Messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="card-background-page">\n <div *ngFor="let a of  favouriteArray"   >\n    <ion-card>\n        <!-- <img src="{{a.message}}"/> -->\n        \n          <img src="{{a.message}}"/>\n          <div class="card-title"> <ion-icon text-center name="heart"></ion-icon></div>\n         \n        </ion-card>\n      \n </div>\n   \n\n\n\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\favourite-messages\favourite-messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], FavouriteMessagesPage);
    return FavouriteMessagesPage;
}());

//# sourceMappingURL=favourite-messages.js.map

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		851,
		10
	],
	"../pages/automate/automate.module": [
		852,
		9
	],
	"../pages/event/event.module": [
		853,
		8
	],
	"../pages/favourite-messages/favourite-messages.module": [
		854,
		7
	],
	"../pages/login/login.module": [
		855,
		6
	],
	"../pages/message/message.module": [
		856,
		5
	],
	"../pages/personalized/personalized.module": [
		857,
		4
	],
	"../pages/popover/popover.module": [
		858,
		3
	],
	"../pages/register/register.module": [
		859,
		2
	],
	"../pages/sms/sms.module": [
		860,
		0
	],
	"../pages/view/view.module": [
		861,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 225;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_auth__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(http, fire, socialSharing) {
        this.http = http;
        this.fire = fire;
        this.socialSharing = socialSharing;
        this.graduationArray = [];
        this.weddingArray = [];
        this.birthdayArray = [];
        this.anniversaryArray = [];
        this.babyShowerArray = [];
        this.newJobArray = [];
        this.provider = new firebase.auth.GoogleAuthProvider();
        this.likedArray = [];
        this.messageArray = [];
        console.log('Hello DatabaseProvider Provider');
    }
    DatabaseProvider.prototype.checkstate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user != null) {
                    // alert('user signed in')
                    _this.condition = 1;
                }
                else {
                    _this.condition = 0;
                    // alert('no user signed in')
                }
                resolve(_this.condition);
            });
        });
    };
    DatabaseProvider.prototype.register = function (email, password, name) {
        var users = firebase.auth().currentUser;
        return new Promise(function (resolve, reject) {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
                // firebase.database().ref("user/"+ users.uid).set({
                //   name:name
                // })
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.login = function (email, password) {
        //firebase.auth().signInWithEmail()
        return new Promise(function (resolve, reject) {
            firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
                resolve();
            }, function (Error) {
                reject(Error);
            });
        });
    };
    DatabaseProvider.prototype.forgetPassword = function (email) {
        return new Promise(function (resolve, reject) {
            firebase.auth().sendPasswordResetEmail(email).then(function () {
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.SignWithGoogle = function () {
        var users = firebase.auth().currentUser;
        this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        return firebase.auth().signInWithRedirect(this.provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            var res = result.user.displayName.split(" ");
            console.log(user);
            firebase.database().ref("user/" + users.uid).set({
                email: user.email,
                username: user.displayName,
                name: {
                    first: res[0],
                    middle: res[1],
                    last: res[2]
                }
            });
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.d
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    };
    // logInWithFaceBook
    DatabaseProvider.prototype.logInWithFaceBook = function () {
        this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(function (res) {
            console.log(res);
        });
    };
    DatabaseProvider.prototype.anniversaryMessage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase.database().ref('category/' + 'ANNIVERSARY').on('value', function (data) {
                var message = data.val();
                console.log(data.val());
                var keys = Object.keys(message);
                console.log(keys);
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
                    var obj = {
                        k: keys,
                        message: message[k].message
                    };
                    _this.anniversaryArray.push(obj);
                    resolve(_this.anniversaryArray);
                }
            });
        });
    };
    DatabaseProvider.prototype.birthdayMessages = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase.database().ref('category/' + 'Other').on('value', function (data) {
                var message = data.val();
                console.log(data.val());
                var keys = Object.keys(message);
                console.log(keys);
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
                    var obj = {
                        k: keys,
                        message: message[k].message
                    };
                    _this.birthdayArray.push(obj);
                    resolve(_this.birthdayArray);
                }
            });
        });
    };
    DatabaseProvider.prototype.babyShowerMessages = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase.database().ref('category/' + 'babyShower').on('value', function (data) {
                var message = data.val();
                console.log(data.val());
                var keys = Object.keys(message);
                console.log(keys);
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
                    var obj = {
                        k: keys,
                        message: message[k].message
                    };
                    _this.babyShowerArray.push(obj);
                    resolve(_this.babyShowerArray);
                }
            });
        });
    };
    DatabaseProvider.prototype.GraduationMessages = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase.database().ref('category/' + 'Graduation').on('value', function (data) {
                var message = data.val();
                console.log(data.val());
                var keys = Object.keys(message);
                console.log(keys);
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
                    var obj = {
                        k: keys,
                        message: message[k].message
                    };
                    _this.graduationArray.push(obj);
                    resolve(_this.graduationArray);
                }
            });
        });
    };
    DatabaseProvider.prototype.weddingMessage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase.database().ref('category/' + 'Weddings').on('value', function (data) {
                var message = data.val();
                console.log(data.val());
                var keys = Object.keys(message);
                console.log(keys);
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
                    var obj = {
                        k: keys,
                        message: message[k].message
                    };
                    _this.weddingArray.push(obj);
                    resolve(_this.weddingArray);
                }
            });
        });
    };
    DatabaseProvider.prototype.newJobMessage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase.database().ref('category/' + 'newJob').on('value', function (data) {
                var message = data.val();
                console.log(data.val());
                var keys = Object.keys(message);
                console.log(keys);
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
                    var obj = {
                        k: keys,
                        message: message[k].message
                    };
                    _this.newJobArray.push(obj);
                    resolve(_this.newJobArray);
                }
            });
        });
    };
    DatabaseProvider.prototype.sendviaWhatsApp = function (message, url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.socialSharing.shareViaWhatsApp(message, null, url).then(function () {
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.saveSentMessages = function (name, message, date) {
        var users = firebase.auth().currentUser;
        var userid = users.uid;
        return new Promise(function (resolve, reject) {
            firebase.database().ref("messagesent/" + userid).push({
                name: name,
                message: message,
                date: date
            });
            resolve();
        });
    };
    DatabaseProvider.prototype.likedMessage = function (message) {
        var users = firebase.auth().currentUser;
        var userid = users.uid;
        return new Promise(function (resolve, reject) {
            firebase.database().ref("likedPictures/" + userid).push({
                message: message,
            });
            resolve();
        });
    };
    DatabaseProvider.prototype.getMessages = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase.database().ref('category/' + 'General').on('value', function (data) {
                var message = data.val();
                console.log(data.val());
                var keys = Object.keys(message);
                console.log(keys);
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
                    var obj = {
                        k: keys,
                        message: message[k].message
                    };
                    _this.messageArray.push(obj);
                    resolve(_this.messageArray);
                }
            });
        });
    };
    DatabaseProvider.prototype.sendviaWhatsApps = function (message) {
        this.socialSharing.shareViaWhatsApp(message, null, null).then(function (data) {
            console.log(data);
        }, function (error) {
        });
    };
    DatabaseProvider.prototype.sendviaFacebook = function (message, url) {
        this.socialSharing.shareViaFacebook(this.message, null, url).then(function () { }, function (error) { });
    };
    DatabaseProvider.prototype.sendViaemail = function (message) {
        this.socialSharing.shareViaEmail(message, null, null).then(function () {
        }, function (error) {
        });
    };
    DatabaseProvider.prototype.getFavourite = function () {
        var _this = this;
        var users = firebase.auth().currentUser;
        var userid = users.uid;
        return new Promise(function (resolve, reject) {
            firebase.database().ref("likedPictures/" + userid).on('value', function (data) {
                var message = data.val();
                console.log(data.val());
                if (message != null) {
                    var keys = Object.keys(message);
                    console.log(keys);
                    for (var i = 0; i < keys.length; i++) {
                        var k = keys[i];
                        var obj = {
                            k: keys,
                            message: message[k].message
                        };
                        _this.likedArray.push(obj);
                        resolve(_this.likedArray);
                    }
                }
                else {
                    alert("YOU DONT FAV MESSAGE");
                }
            });
        });
    };
    DatabaseProvider.prototype.signout = function () {
        firebase.auth().signOut().then(function () {
        }).catch(function (error) {
            // An error happened.
        });
    };
    DatabaseProvider.prototype.sentMessage = function (message, name, date) {
        var users = firebase.auth().currentUser;
        var userid = users.uid;
        return new Promise(function (resolve, reject) {
            firebase.database().ref("sentMessage/" + userid).push({
                message: message,
                name: name,
                date: date
            });
            resolve();
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_view__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.sentMessages = [];
        this.sentMessages = [];
        var users = firebase.auth().currentUser;
        console.log(users.uid);
        firebase.database().ref("messagesent/" + users.uid).on('value', function (data) {
            var name = data.val();
            if (name !== null) {
                var keys = Object.keys(name);
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
                    var obj = {
                        message: name[k].message,
                        name: name[k].name,
                        key: k,
                        date: name[k].date
                    };
                    _this.sentMessages.push(obj);
                    console.log(_this.sentMessages);
                }
                ;
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Confirmation',
                    subTitle: 'YOUR DONT HAVE Sent Messages CURRENTLY',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    }
    ContactPage.prototype.view = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_view__["a" /* ViewPage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\contact\contact.html"*/'<!-- <ion-header >\n    <ion-toolbar color="b" text-center>\n      <ion-title>Sent</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content padding class="background" text-center>\n\n<div class="card">\n    <h6>21 Sep 2018 </h6>\n    <ion-list>\n        <ion-item class="item">\n            <ion-thumbnail item-start>\n            <img src="../../assets/imgs/logo.png">\n            </ion-thumbnail>\n            <h3>My Neighbor Totoro</h3>\n            <p>Hayao Miyazaki • 1988 dgufyufdyg ufdgui dfyg uufdyg yd fsdgf dfyg fugudysufy hdggyudf gyfd yug\n                dsfds\n            </p>\n            <button ion-button clear item-end (click)="view()                                   " >View</button>\n        </ion-item>\n  </ion-list>\n</div>\n\n<div class="card">\n    <h6>21 Sep 2018 </h6>\n    <ion-list>\n        <ion-item class="item">\n            <ion-thumbnail item-start>\n            <img src="../../assets/imgs/logo.png">\n            </ion-thumbnail>\n            <h3>My Neighbor Totoro</h3>\n            <p>Hayao Miyazaki • 1988 dgufyufdyg ufdgui dfyg uufdyg yd fsdgf dfyg fugudysufy hdggyudf gyfd yug\n                dsfds\n            </p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n  </ion-list>\n</div>\n\n<div class="card">\n    <h6>21 Sep 2018 </h6>\n    <ion-list>\n        <ion-item class="item">\n            <ion-thumbnail item-start>\n            <img src="../../assets/imgs/logo.png">\n            </ion-thumbnail>\n            <h3>My Neighbor Totoro</h3>\n            <p>Hayao Miyazaki • 1988 dgufyufdyg ufdgui dfyg uufdyg yd fsdgf dfyg fugudysufy hdggyudf gyfd yug\n                dsfds\n            </p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n  </ion-list>\n</div>\n\n<div class="card">\n    <h6>21 Sep 2018 </h6>\n    <ion-list>\n        <ion-item class="item">\n            <ion-thumbnail item-start>\n            <img src="../../assets/imgs/logo.png">\n            </ion-thumbnail>\n            <h3>My Neighbor Totoro</h3>\n            <p>Hayao Miyazaki • 1988 dgufyufdyg ufdgui dfyg uufdyg yd fsdgf dfyg fugudysufy hdggyudf gyfd yug\n                dsfds\n            </p>\n            <button ion-button clear item-end>View</button>\n        </ion-item>\n  </ion-list>\n</div> -->\n       \n<!-- </ion-content> -->\n<ion-header >\n    <ion-toolbar color="b" text-center>\n      <ion-title>Sent</ion-title>\n    </ion-toolbar>\n  </ion-header>\n <ion-content padding class="background" text-center>\n \n <div class="card" *ngFor="let v of sentMessages; let u = index">\n    <h6>{{v.date}} </h6>\n    <ion-list>\n        <ion-item class="item"text-wrap   >\n            <!-- <ion-thumbnail item-start>\n            <img src="../../assets/imgs/logo.png">\n            </ion-thumbnail> -->\n            <h2><b>{{v.name}}</b></h2>\n            <p>\n            {{v.message}}\n            </p>\n            <!-- <button ion-button clear item-end>View</button> -->\n        </ion-item>\n  </ion-list>\n </div>\n \n \n \n \n \n \n </ion-content>'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_popover__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_swing__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, db, socialSharing, actionSheetCtrl, popoverCtrl, sanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.db = db;
        this.socialSharing = socialSharing;
        this.actionSheetCtrl = actionSheetCtrl;
        this.popoverCtrl = popoverCtrl;
        this.sanitizer = sanitizer;
        this.mesaagesArray = [];
        this.msgz = [];
        this.indx = 0;
        this.recentCard = '';
        this.currentIndex = 0;
        this.count = 0;
        this.liked = 0;
        this.ready = false;
        this.attendants = [];
        this.cardDirection = "xy";
        this.cardOverlay = {
            like: {
                backgroundColor: '#28e93b'
            },
            dislike: {
                backgroundColor: '#e92828'
            }
        };
        this.images = [];
        this.db.getMessages().then(function (data) {
            console.log(data);
            _this.images = data;
            console.log(_this.images);
            for (var i = 0; i < _this.images.length; i++) {
                _this.attendants.push({
                    id: i + 1,
                    likeEvent: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](),
                    destroyEvent: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](),
                    asBg: sanitizer.bypassSecurityTrustStyle('url(' + _this.images[i].message + ')')
                });
            }
            _this.ready = true;
            //this.msgz=this.mesaagesArray[0].message;
        }, function (error) { });
    }
    HomePage.prototype.onCardInteract = function (event) {
        console.log(event);
        if (event.like == false) {
            this.liked = this.liked + 1;
        }
        if (event.like == true) {
            console.log(this.liked);
            this.msgz = this.images[this.liked].message;
            this.liked = this.liked + 1;
            console.log("liked");
            console.log(this.msgz);
            console.log(this.liked);
            this.db.likedMessage(this.msgz).then(function () { });
        }
        else {
            //console.log(event);
            console.log("disliked");
        }
    };
    HomePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__popover_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage.prototype.shareVia = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Whatsapp',
                    role: 'destructive',
                    handler: function () {
                        //console.log(this.indx);
                        _this.shareMsg = _this.images[_this.liked].message;
                        console.log(_this.shareMsg);
                        _this.db.sendviaWhatsApp(_this.shareMsg, _this.shareMsg);
                        console.log('Destructive clicked');
                        console.log(_this.shareMsg);
                        console.log(_this.liked);
                    }
                }, {
                    text: 'Facebook',
                    handler: function () {
                        console.log('Archive clicked');
                        _this.shareMsg = _this.images[_this.liked].message;
                        _this.db.sendviaFacebook(_this.shareMsg, _this.shareMsg);
                    }
                }, {
                    text: 'Email',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.shareMsg = _this.images[_this.liked].message;
                        _this.db.sendViaemail(_this.shareMsg);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myswing1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_angular2_swing__["SwingStackComponent"])
    ], HomePage.prototype, "swingStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('mycards1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], HomePage.prototype, "swingCards", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\home\home.html"*/'<ion-header>\n\n  \n\n        <ion-navbar color="b" >\n\n            <ion-buttons left>\n\n                <button ion-button  color="royal">\n\n                  <ion-icon name=""></ion-icon>\n\n                </button>\n\n              </ion-buttons>\n\n          <ion-title text-center>\n\n              Home\n\n          </ion-title>\n\n          <ion-buttons end>\n\n              <button ion-button  color="royal" (click)="presentPopover($event)">\n\n                <ion-icon name="more"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n        </ion-navbar>\n\n      </ion-header>\n\n\n\n<ion-content  class="backgroud" padding >\n\n  <div class="card-container" *ngIf="ready">\n\n    <sc-card  *ngFor="let attendant of attendants"\n\n[orientation]="cardDirection" [tinder-card]="cardOverlay"[callDestroy]="attendant.destroyEvent" [callLike]="attendant.likeEvent" (onLike)="onCardInteract($event)">\n\n\n\n<div class="user_img" [style.background-image]="attendant.asBg"></div>\n\n    </sc-card>\n\n    \n\n</div>\n\n\n\n\n\n<ion-grid>\n\n<ion-row>\n\n  <ion-col>\n\n    <ion-fab right bottom>\n\n      <button ion-fab class="fabs" color="light"><ion-icon color="secondary" name="md-heart" (click)="getMessage()" ></ion-icon></button>\n\n    </ion-fab>\n\n  </ion-col>\n\n  <ion-col>\n\n    <ion-fab center bottom >\n\n      <button ion-fab mini color="light" (click)="shareVia()"><ion-icon color="primary" name="share"></ion-icon></button>\n\n     </ion-fab>\n\n  </ion-col>\n\n  <ion-col>\n\n    <ion-fab left bottom >\n\n      <button ion-fab  class="fabs" color="light"><ion-icon color="danger" name="md-close" (click)="getMessage()" ></ion-icon></button>\n\n    </ion-fab> \n\n  </ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n        \n\n  <!-- <ion-fab right bottom>\n\n  <button ion-fab class="fabs" color="light"><ion-icon color="secondary" name="md-heart" (click)="getMessage()" ></ion-icon></button>\n\n</ion-fab>\n\n<ion-fab center bottom >\n\n  <button ion-fab mini color="light" (click)="shareVia()"><ion-icon color="primary" name="share"></ion-icon></button>\n\n </ion-fab>\n\n<ion-fab left bottom >\n\n  <button ion-fab  class="fabs" color="light"><ion-icon color="danger" name="md-close" (click)="getMessage()" ></ion-icon></button>\n\n</ion-fab>  -->\n\n\n\n         \n\n      </ion-content>'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.send = function () {
        firebase.database().ref('category/' + this.relationship).push({
            message: this.message
        });
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\admin\admin.html"*/'<!--\n\n  Generated template for the AdminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Admin</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item>\n\n        <ion-label>Gaming</ion-label>\n\n        <ion-select [(ngModel)]="relationship">\n\n            <ion-option value="newJob">job</ion-option>\n\n            <ion-option value="Birthday">Birthday</ion-option>\n\n            <ion-option value="babyShower">Baby shower</ion-option>\n\n          <ion-option value="friend">friend</ion-option>\n\n          <ion-option value="spouse">spouse</ion-option>\n\n          <ion-option value="family">family</ion-option>\n\n          <ion-option value="Lover">Lover</ion-option>\n\n          <ion-option value="Graduation">Graduation</ion-option>\n\n          <ion-option value="Weddings">Weddings</ion-option>\n\n          <ion-option value="ANNIVERSARY">ANNIVERSARY</ion-option>\n\n          <ion-option value="General">General</ion-option>\n\n          <ion-option value="Other">Other</ion-option>\n\n\n\n         \n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n        <ion-textarea  [(ngModel)]="message"></ion-textarea>\n\n      </ion-item>\n\n\n\n      <button (click)="send()">Send</button>\n\n      \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(507);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_database_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_personalized_personalized__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_automate_automate__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_message_message__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_sms__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_contacts__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_local_notifications__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_event_event__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_popover_popover__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_favourite_messages_favourite_messages__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_swing__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng2_swipe_cards__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_view_view__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var config = {
    apiKey: "AIzaSyD-60vJrUA-k0qFjOyc-2quuULN2t9DKAc",
    authDomain: "momentsintime-a9b60.firebaseapp.com",
    databaseURL: "https://momentsintime-a9b60.firebaseio.com",
    projectId: "momentsintime-a9b60",
    storageBucket: "",
    messagingSenderId: "475473470654"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */], __WEBPACK_IMPORTED_MODULE_14__pages_personalized_personalized__["a" /* PersonalizedPage */], __WEBPACK_IMPORTED_MODULE_15__pages_automate_automate__["a" /* AutomatePage */], __WEBPACK_IMPORTED_MODULE_19__pages_message_message__["a" /* MessagePage */], __WEBPACK_IMPORTED_MODULE_24__pages_event_event__["a" /* EventPage */], __WEBPACK_IMPORTED_MODULE_25__pages_popover_popover__["a" /* PopoverPage */], __WEBPACK_IMPORTED_MODULE_26__pages_favourite_messages_favourite_messages__["a" /* FavouriteMessagesPage */], __WEBPACK_IMPORTED_MODULE_29__pages_view_view__["a" /* ViewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_27_angular2_swing__["SwingModule"], __WEBPACK_IMPORTED_MODULE_28_ng2_swipe_cards__["a" /* SwipeCardsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/automate/automate.module#AutomatePageModule', name: 'AutomatePage', segment: 'automate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event/event.module#EventPageModule', name: 'EventPage', segment: 'event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favourite-messages/favourite-messages.module#FavouriteMessagesPageModule', name: 'FavouriteMessagesPage', segment: 'favourite-messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personalized/personalized.module#PersonalizedPageModule', name: 'PersonalizedPage', segment: 'personalized', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sms/sms.module#SmsPageModule', name: 'SmsPage', segment: 'sms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view/view.module#ViewPageModule', name: 'ViewPage', segment: 'view', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2__["AngularFireModule"].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["AngularFireAuthModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */], __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_14__pages_personalized_personalized__["a" /* PersonalizedPage */], __WEBPACK_IMPORTED_MODULE_15__pages_automate_automate__["a" /* AutomatePage */], __WEBPACK_IMPORTED_MODULE_19__pages_message_message__["a" /* MessagePage */], __WEBPACK_IMPORTED_MODULE_24__pages_event_event__["a" /* EventPage */], __WEBPACK_IMPORTED_MODULE_25__pages_popover_popover__["a" /* PopoverPage */], __WEBPACK_IMPORTED_MODULE_26__pages_favourite_messages_favourite_messages__["a" /* FavouriteMessagesPage */], __WEBPACK_IMPORTED_MODULE_29__pages_view_view__["a" /* ViewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_10__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_20__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_contacts__["a" /* Contacts */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_local_notifications__["a" /* LocalNotifications */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 230,
	"./af.js": 230,
	"./ar": 231,
	"./ar-dz": 232,
	"./ar-dz.js": 232,
	"./ar-kw": 233,
	"./ar-kw.js": 233,
	"./ar-ly": 234,
	"./ar-ly.js": 234,
	"./ar-ma": 235,
	"./ar-ma.js": 235,
	"./ar-sa": 236,
	"./ar-sa.js": 236,
	"./ar-tn": 237,
	"./ar-tn.js": 237,
	"./ar.js": 231,
	"./az": 238,
	"./az.js": 238,
	"./be": 239,
	"./be.js": 239,
	"./bg": 240,
	"./bg.js": 240,
	"./bm": 241,
	"./bm.js": 241,
	"./bn": 242,
	"./bn.js": 242,
	"./bo": 243,
	"./bo.js": 243,
	"./br": 244,
	"./br.js": 244,
	"./bs": 245,
	"./bs.js": 245,
	"./ca": 246,
	"./ca.js": 246,
	"./cs": 247,
	"./cs.js": 247,
	"./cv": 248,
	"./cv.js": 248,
	"./cy": 249,
	"./cy.js": 249,
	"./da": 250,
	"./da.js": 250,
	"./de": 251,
	"./de-at": 252,
	"./de-at.js": 252,
	"./de-ch": 253,
	"./de-ch.js": 253,
	"./de.js": 251,
	"./dv": 254,
	"./dv.js": 254,
	"./el": 255,
	"./el.js": 255,
	"./en-au": 256,
	"./en-au.js": 256,
	"./en-ca": 257,
	"./en-ca.js": 257,
	"./en-gb": 258,
	"./en-gb.js": 258,
	"./en-ie": 259,
	"./en-ie.js": 259,
	"./en-il": 260,
	"./en-il.js": 260,
	"./en-nz": 261,
	"./en-nz.js": 261,
	"./eo": 262,
	"./eo.js": 262,
	"./es": 263,
	"./es-do": 264,
	"./es-do.js": 264,
	"./es-us": 265,
	"./es-us.js": 265,
	"./es.js": 263,
	"./et": 266,
	"./et.js": 266,
	"./eu": 267,
	"./eu.js": 267,
	"./fa": 268,
	"./fa.js": 268,
	"./fi": 269,
	"./fi.js": 269,
	"./fo": 270,
	"./fo.js": 270,
	"./fr": 271,
	"./fr-ca": 272,
	"./fr-ca.js": 272,
	"./fr-ch": 273,
	"./fr-ch.js": 273,
	"./fr.js": 271,
	"./fy": 274,
	"./fy.js": 274,
	"./gd": 275,
	"./gd.js": 275,
	"./gl": 276,
	"./gl.js": 276,
	"./gom-latn": 277,
	"./gom-latn.js": 277,
	"./gu": 278,
	"./gu.js": 278,
	"./he": 279,
	"./he.js": 279,
	"./hi": 280,
	"./hi.js": 280,
	"./hr": 281,
	"./hr.js": 281,
	"./hu": 282,
	"./hu.js": 282,
	"./hy-am": 283,
	"./hy-am.js": 283,
	"./id": 284,
	"./id.js": 284,
	"./is": 285,
	"./is.js": 285,
	"./it": 286,
	"./it.js": 286,
	"./ja": 287,
	"./ja.js": 287,
	"./jv": 288,
	"./jv.js": 288,
	"./ka": 289,
	"./ka.js": 289,
	"./kk": 290,
	"./kk.js": 290,
	"./km": 291,
	"./km.js": 291,
	"./kn": 292,
	"./kn.js": 292,
	"./ko": 293,
	"./ko.js": 293,
	"./ky": 294,
	"./ky.js": 294,
	"./lb": 295,
	"./lb.js": 295,
	"./lo": 296,
	"./lo.js": 296,
	"./lt": 297,
	"./lt.js": 297,
	"./lv": 298,
	"./lv.js": 298,
	"./me": 299,
	"./me.js": 299,
	"./mi": 300,
	"./mi.js": 300,
	"./mk": 301,
	"./mk.js": 301,
	"./ml": 302,
	"./ml.js": 302,
	"./mn": 303,
	"./mn.js": 303,
	"./mr": 304,
	"./mr.js": 304,
	"./ms": 305,
	"./ms-my": 306,
	"./ms-my.js": 306,
	"./ms.js": 305,
	"./mt": 307,
	"./mt.js": 307,
	"./my": 308,
	"./my.js": 308,
	"./nb": 309,
	"./nb.js": 309,
	"./ne": 310,
	"./ne.js": 310,
	"./nl": 311,
	"./nl-be": 312,
	"./nl-be.js": 312,
	"./nl.js": 311,
	"./nn": 313,
	"./nn.js": 313,
	"./pa-in": 314,
	"./pa-in.js": 314,
	"./pl": 315,
	"./pl.js": 315,
	"./pt": 316,
	"./pt-br": 317,
	"./pt-br.js": 317,
	"./pt.js": 316,
	"./ro": 318,
	"./ro.js": 318,
	"./ru": 319,
	"./ru.js": 319,
	"./sd": 320,
	"./sd.js": 320,
	"./se": 321,
	"./se.js": 321,
	"./si": 322,
	"./si.js": 322,
	"./sk": 323,
	"./sk.js": 323,
	"./sl": 324,
	"./sl.js": 324,
	"./sq": 325,
	"./sq.js": 325,
	"./sr": 326,
	"./sr-cyrl": 327,
	"./sr-cyrl.js": 327,
	"./sr.js": 326,
	"./ss": 328,
	"./ss.js": 328,
	"./sv": 329,
	"./sv.js": 329,
	"./sw": 330,
	"./sw.js": 330,
	"./ta": 331,
	"./ta.js": 331,
	"./te": 332,
	"./te.js": 332,
	"./tet": 333,
	"./tet.js": 333,
	"./tg": 334,
	"./tg.js": 334,
	"./th": 335,
	"./th.js": 335,
	"./tl-ph": 336,
	"./tl-ph.js": 336,
	"./tlh": 337,
	"./tlh.js": 337,
	"./tr": 338,
	"./tr.js": 338,
	"./tzl": 339,
	"./tzl.js": 339,
	"./tzm": 340,
	"./tzm-latn": 341,
	"./tzm-latn.js": 341,
	"./tzm.js": 340,
	"./ug-cn": 342,
	"./ug-cn.js": 342,
	"./uk": 343,
	"./uk.js": 343,
	"./ur": 344,
	"./ur.js": 344,
	"./uz": 345,
	"./uz-latn": 346,
	"./uz-latn.js": 346,
	"./uz.js": 345,
	"./vi": 347,
	"./vi.js": 347,
	"./x-pseudo": 348,
	"./x-pseudo.js": 348,
	"./yo": 349,
	"./yo.js": 349,
	"./zh-cn": 350,
	"./zh-cn.js": 350,
	"./zh-hk": 351,
	"./zh-hk.js": 351,
	"./zh-tw": 352,
	"./zh-tw.js": 352
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 532;

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__automate_automate__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personalized_personalized__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sms__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_event__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagePage = /** @class */ (function () {
    function MessagePage(navCtrl, navParams, actionSheetCtrl, modalCtrl, alertCtrl, sms, socialSharing, contacts) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.sms = sms;
        this.socialSharing = socialSharing;
        this.contacts = contacts;
        this.graduationMsg = this.navParams.get("graduationMsg");
        this.weddingMsg = this.navParams.get("weddingMsg");
        this.newJobMsg = this.navParams.get("newJobMsg");
        this.birthdayMsg = this.navParams.get("birthdayMsg");
        this.babyShowerMsg = this.navParams.get("babyShowerMsg");
        this.anniversaryMsg = this.navParams.get("anniversaryMsg");
        this.peronalisedMsg = this.navParams.get("peronalisedMsg");
        this.categoryChosen = this.navParams.get("categoryChosen");
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagePage');
        console.log(this.graduationMsg);
        console.log(this.peronalisedMsg);
        console.log(this.categoryChosen);
    };
    MessagePage.prototype.chooseDate = function () {
        var d = new Date();
        var day = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();
        var today = year + "-" + '0' + month + "-" + day + "T" + hour + ":" + minute + ":" + second;
        this.countDown = __WEBPACK_IMPORTED_MODULE_8_moment__(this.myDate).fromNow();
        console.log(today);
        console.log(this.myDate);
        console.log(this.countDown);
        if (this.myDate == undefined) {
            var alert_1 = this.alertCtrl.create({
                title: 'Alert',
                subTitle: "You need to set date and time",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.message();
        }
    };
    MessagePage.prototype.message = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose message type',
            buttons: [
                {
                    text: 'Personalize Message',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__personalized_personalized__["a" /* PersonalizedPage */], { chosenDate: _this.myDate, chosenTime: _this.time, name: _this.name, categoryChosen: _this.categoryChosen, countDown: _this.countDown });
                    }
                }, {
                    text: 'Automated Message',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__automate_automate__["a" /* AutomatePage */], { graduation: _this.graduationMsg, chosenDate: _this.myDate, chosenTime: _this.time, name: _this.name, categoryChosen: _this.categoryChosen, countDown: _this.countDown });
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    MessagePage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__event_event__["a" /* EventPage */]);
    };
    MessagePage.prototype.ngAfterViewInit = function () {
        var tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = 'none';
            });
        }
    };
    MessagePage.prototype.ionViewWillLeave = function () {
        var tabs = document.querySelectorAll('.show-tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = 'flex';
            });
        }
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-message',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\message\message.html"*/'\n\n\n\n <ion-header>\n\n  \n\n  <ion-navbar color="b" >\n\n    <ion-title text-center>\n\n        {{categoryChosen}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content class="background">\n\n  <div padding class="body" >\n\n    <div class="flex">\n\n     <h1 text-center> <b> Get People & {{categoryChosen}} Worth Celebrating</b></h1>\n\n </div>\n\n    <div class="top">\n\n          <ion-item>\n\n          \n\n            <ion-input placeholder="Name" type="text" [(ngModel)]="name"></ion-input>\n\n          </ion-item>\n\n        \n\n         \n\n       <ion-item class="item">\n\n        <ion-datetime placeholder="Time" displayFormat="h:mm A" pickerFormat="HH:mm A"  [(ngModel)]="time"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item class="item">\n\n            <ion-datetime placeholder="Date" displayFormat="DD MMM YYYY"  [(ngModel)]="myDate" required="required" ></ion-datetime>\n\n            </ion-item>\n\n\n\n    </div>\n\n    <div class="buttons"  text-center>\n\n        <button ion-button  class="btn" color="b" round block (click)="chooseDate()">Choose message Type</button>\n\n        <br>\n\n       \n\n    </div>\n\n  \n\n  \n\n      \n\n\n\n  </div>\n\n    \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\message\message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__["a" /* Contacts */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_message__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import {AdminPage} from '../admin/admin'
//import { THIS_EXPR } from '../../../node_modules/@angular/compiler/src/output/output_ast';
//import {HomePage} from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, keyboard, db, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.keyboard = keyboard;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
        this.message = function () {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__message_message__["a" /* MessagePage */]);
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.presentLoading = function () {
    };
    LoginPage.prototype.Login = function (user) {
        var _this = this;
        if (user.email != undefined && user.password != undefined) {
            this.db.login(user.email, user.password).then(function () {
                var users = firebase.auth().currentUser;
                console.log(users.uid);
                (users);
                firebase.database().ref("user/" + users.uid).set({
                    name: name
                });
                var loader = _this.loadingCtrl.create({
                    content: "Logging in please wait...",
                    duration: 3000
                });
                loader.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                var alert = _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: error,
                    buttons: ['OK']
                });
                alert.present();
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Warning!',
                subTitle: 'Please enter all details',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    LoginPage.prototype.forgetPassword = function (user) {
        var _this = this;
        this.db.forgetPassword(user.email).then(function () {
            var alert = _this.alertCtrl.create({
                title: 'CONFIRMATION',
                subTitle: "Please check your Email",
                buttons: ['OK']
            });
            alert.present();
        }, function (error) {
            var alert = _this.alertCtrl.create({
                title: 'CONFIRMATION',
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    // remove after am done  its for navigation to register
    LoginPage.prototype.de = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.tabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.logInWithFaceBook = function () {
        this.db.logInWithFaceBook();
    };
    LoginPage.prototype.loginwithGooogle = function () {
        this.db.SignWithGoogle();
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\login\login.html"*/'        \n\n        <!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content text-center class="background">\n\n  <div padding class="body" ion-fixed >\n\n\n\n    <div class="logo-sec">\n\n     <h1>MIT</h1>\n\n     <p>Moment in Time</p>\n\n   </div>\n\n   <!-- close body -->\n\n\n\n   <div class="inputs" >\n\n  \n\n     <ion-item class="items" >\n\n       <ion-label  > <ion-icon color="light" name="mail"></ion-icon>\n\n       </ion-label>\n\n       <ion-input type="email"   placeholder="Email" [(ngModel)]="user.email"></ion-input>\n\n     </ion-item>\n\n   \n\n     <ion-item class="items" >\n\n       <ion-label><ion-icon color="light" name="unlock"></ion-icon></ion-label>\n\n       <ion-input type="password"  placeholder="Password" [(ngModel)]="user.password"></ion-input>\n\n     </ion-item>\n\n  \n\n   <div class="buttons" >\n\n     <button block ion-button round class="Login"outline color="light" (click)="Login(user)">Login</button>\n\n    </div>\n\n    \n\n  </div>\n\n  <!-- close inputs -->\n\n  <div class="signwith" >\n\n      <h6 color="primary" >or sign in with:</h6>\n\n      <ion-grid class="signin-icons">\n\n        <ion-row align-items-center>\n\n          <ion-col col-2 align-self-center (click)="logInWithFaceBook()">\n\n            <img class="img" src="../../assets/imgs/icons8_Facebook_Circled_100px_3.png" alt="facebook icon">\n\n          </ion-col>\n\n          <ion-col col-2 (click)="loginwithGooogle()">\n\n            <img  class="img" src="../../assets/imgs/icons8_Google_Plus_Circled_100px_1.png" alt="google icon">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n  </div>\n\n  <!-- close sigin with -->\n\n\n\n  <!-- close register section --> \n\n  </div>           \n\n   </ion-content>\n\n   <ion-footer  [hidden]="keyboard.isOpen()" >\n\n     <div class="register" >\n\n      <button ion-button clear color="light"  class="reg"  (click)="register()">Don\'t have account?</button>\n\n      <button ion-button clear  color="light" class="Forget" (click)="forgetPassword(user)">Forget Password</button>\n\n  </div>\n\n   </ion-footer>\n\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_contacts__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_database_database__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, contacts, alertCtrl, actionSheetCtrl, localNotifications, sms, socialSharing, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contacts = contacts;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.localNotifications = localNotifications;
        this.sms = sms;
        this.socialSharing = socialSharing;
        this.db = db;
        this.sentMessages = new Array();
        this.countDown = this.navParams.get('countDown');
        this.automessage = this.navParams.get('automessage');
        this.date = this.navParams.get("date");
        this.dates = new Date();
        this.icon = 'close-circle';
        console.log(this.icon);
        console.log(this.automessage);
        this.sentMessages = [];
        var users = firebase.auth().currentUser;
        console.log(users.uid);
        firebase.database().ref("messagesent/" + users.uid).on('value', function (data) {
            var name = data.val();
            if (name !== null) {
                var keys = Object.keys(name);
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
                    var obj = {
                        message: name[k].message,
                        name: name[k].name,
                        key: k,
                        icon: _this.icon,
                        date: name[k].date
                    };
                    _this.sentMessages.push(obj);
                    console.log(_this.sentMessages);
                }
                ;
            }
            else {
                alert("YOU DONT HAVE MESSAGES SCHEDULED");
            }
        });
    }
    AboutPage.prototype.Delete = function (a) {
        var users = firebase.auth().currentUser;
        var userid = users.uid;
        this.sentMessages = [];
        firebase.database().ref('messagesent/' + userid).child(a).remove();
    };
    AboutPage.prototype.contactss = function (message) {
        var _this = this;
        this.contacts.pickContact().then(function (data) {
            console.log(data);
            _this.phoneNumber = (data.phoneNumbers[0].value);
            _this.name = (data.displayName);
        }, function (error) {
            alert(error);
        });
        setTimeout(function () { _this.showConfirm(message); }, 10000);
    };
    AboutPage.prototype.sendviaWhatsApp = function (message) {
        var _this = this;
        this.socialSharing.shareViaWhatsApp(message, null, null).then(function (data) {
            console.log(data);
            _this.icon = "checkmark-circle";
        }, function (error) {
        });
    };
    AboutPage.prototype.sendviaFacebook = function (message) {
        this.socialSharing.shareViaFacebook(this.message, null, null).then(function () { }, function (error) { });
        this.icon = "checkmark-circle";
    };
    AboutPage.prototype.sendViaemail = function (message) {
        var _this = this;
        this.socialSharing.shareViaEmail(message, null, null).then(function () {
            _this.icon = "checkmark-circle";
        }, function (error) {
        });
    };
    AboutPage.prototype.sendVia = function (message, key) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'CHOOSE',
            buttons: [
                {
                    text: 'SMS',
                    role: 'destructive',
                    handler: function () {
                        _this.contactss(message);
                        _this.db.sentMessage(message, _this.name, _this.dates).then(function () { });
                        var users = firebase.auth().currentUser;
                        var userid = users.uid;
                        _this.sentMessages = [];
                        firebase.database().ref('messagesent/' + userid).child(key).remove();
                    }
                },
                {
                    text: 'Email',
                    role: 'destructive',
                    handler: function () {
                        _this.sendViaemail(message);
                        _this.db.sentMessage(message, _this.name, _this.dates).then(function () { });
                        var users = firebase.auth().currentUser;
                        var userid = users.uid;
                        _this.sentMessages = [];
                        firebase.database().ref('messagesent/' + userid).child(key).remove();
                    }
                },
                {
                    text: 'WhatsAPP',
                    handler: function () {
                        _this.sendviaWhatsApp(message);
                        _this.db.sentMessage(message, _this.name, _this.dates).then(function () { });
                        var users = firebase.auth().currentUser;
                        var userid = users.uid;
                        _this.sentMessages = [];
                        firebase.database().ref('messagesent/' + userid).child(key).remove();
                    }
                }, {
                    text: 'Facebook',
                    role: 'cancel',
                    handler: function () {
                        _this.sendviaFacebook(message);
                        _this.db.sentMessage(message, _this.name, _this.dates).then(function () { });
                        var users = firebase.auth().currentUser;
                        var userid = users.uid;
                        _this.sentMessages = [];
                        firebase.database().ref('messagesent/' + userid).child(key).remove();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AboutPage.prototype.showConfirm = function (a) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.name,
            message: this.phoneNumber,
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function () {
                        // alert(a)
                        _this.sms.send(_this.phoneNumber, a).then(function () {
                            alert('success');
                            _this.icon = "checkmark-circle";
                        }, function (error) {
                            alert(error);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\about\about.html"*/'<ion-header >\n    <ion-toolbar color="b" text-center>\n      <ion-title>Review</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n<ion-content padding class="background" text-center>\n  <ion-list *ngFor="let v of sentMessages; let u = index" >\n    <div (click)="sendVia(v.message)" >\n      <ion-item-sliding no-lines class="item"  >\n        <ion-item  text-wrap  >\n          <div class="heading" >\n            {{v.name}}\n          </div>\n          \n          <div  >\n            {{v.message}}\n             {{v.automessage}}\n          </div>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n              </ion-col>\n              <ion-col center text-right>\n                <ion-note  color="grey" >\n                  {{countDown}}\n                </ion-note>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="b" (click)="Delete(v.key)">\n            <ion-icon name="delete"></ion-icon>\n            Delete\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </div>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_contacts__["a" /* Contacts */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_6__providers_database_database__["a" /* DatabaseProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, db) {
        var _this = this;
        db.checkstate().then(function (data) {
            if (data == 1) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\app\app.html"*/'<ion-nav [root]="rootPage" ></ion-nav>\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_event__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__event_event__["a" /* EventPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\tabs\tabs.html"*/'<ion-tabs color="b" >\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Event" tabIcon="ios-calendar"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Review" tabIcon="ios-bookmark"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Sent" tabIcon="ios-mail-open"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_message__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_popover__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventPage = /** @class */ (function () {
    function EventPage(navCtrl, navParams, db, popoverCtrl, socialSharing, actionSheetCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.popoverCtrl = popoverCtrl;
        this.socialSharing = socialSharing;
        this.actionSheetCtrl = actionSheetCtrl;
        this.mesaagesArray = [];
        this.msgz = [];
        this.indx = 1;
        this.db.getMessages().then(function (data) {
            _this.mesaagesArray = data;
            console.log(_this.mesaagesArray);
            _this.msgz = _this.mesaagesArray[0].message;
        }, function (error) { });
    }
    EventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventPage');
    };
    EventPage.prototype.graduation = function (a) {
        var _this = this;
        this.db.GraduationMessages().then(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], { graduationMsg: data, categoryChosen: a });
        }, function (error) { });
    };
    EventPage.prototype.wedding = function (a) {
        var _this = this;
        this.db.weddingMessage().then(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], { graduationMsg: data, categoryChosen: a });
        }, function (error) { });
    };
    EventPage.prototype.anniversary = function (a) {
        var _this = this;
        this.db.anniversaryMessage().then(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], { graduationMsg: data, categoryChosen: a });
        }, function (error) { });
    };
    EventPage.prototype.newJob = function (a) {
        var _this = this;
        this.db.newJobMessage().then(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], { graduationMsg: data, categoryChosen: a });
        }, function (error) { });
    };
    EventPage.prototype.babyShower = function (a) {
        var _this = this;
        this.db.babyShowerMessages().then(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], { graduationMsg: data, categoryChosen: a });
        }, function (error) { });
    };
    EventPage.prototype.birthday = function (a) {
        var _this = this;
        this.db.birthdayMessages().then(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], { graduationMsg: data, categoryChosen: a });
        }, function (error) { });
    };
    EventPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__popover_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-event',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\event\event.html"*/'<ion-header>\n  \n    <ion-navbar color="b" >\n       \n      <ion-title text-center>\n          Event\n      </ion-title>\n     \n    </ion-navbar>\n  </ion-header>\n\n <ion-content  >\n     <div class="body" ion-fixed >\n\n    \n    <ion-grid padding>\n        <ion-row>\n            <ion-col  >\n                <div>\n                      <ion-card  style="background:rgb(207, 117, 174)" class="card" (click)="birthday(\'Birthday\')" class="animated  slideInLeft delay-2s" >\n                              <ion-card-content> \n                                  <img src="../../assets/imgs/icons8_Wedding_Cake_96px_1.png" alt="" >\n                                <ion-card-title>\n                                    <h3>Birthday</h3>\n                                   \n                                  </ion-card-title>\n                              </ion-card-content>\n                            </ion-card>\n                      \n                </div>\n            </ion-col>\n            <ion-col>\n              <div>\n                      <ion-card class="card"   style="background:#FBD17F" (click)="graduation(\'Graduation\')" class="animated  slideInLeft delay-2s">\n                              <ion-card-content> \n                                 <img src="../../assets/imgs/icons8_Graduation_Cap_96px.png" alt="">\n                                  <ion-card-title>\n                                      <h3>Graduation</h3>\n                                    </ion-card-title>\n                                </ion-card-content>\n                          </ion-card>\n              </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col >\n                <div>\n                      <ion-card class="card" style="background:#FFB4ED"  (click)="babyShower(\'Baby Shower\')" class="animated  slideInRight delay-2s">\n                              <ion-card-content > \n                                  <img src="../../assets/imgs/icons8_Mother_96px.png" alt="">\n                                  <ion-card-title>\n                                      <h3>Baby Shower</h3>\n                                      \n                                    </ion-card-title>\n                                </ion-card-content>\n                              </ion-card>\n                        \n                </div>\n            </ion-col>\n            <ion-col>\n                <div>\n                      <ion-card class="card" style="background:#9CDCFF" (click)="newJob(\'New Job\')" class="animated  slideInDown delay-2s">\n                              <ion-card-content> \n                                  <img src="../../assets/imgs/icons8_Briefcase_96px.png" alt="">\n                                  <ion-card-title>\n                                      <h3>New Job/career</h3>\n                                    </ion-card-title>\n                                </ion-card-content>\n                          </ion-card>\n                </div>\n            </ion-col>\n        </ion-row>\n        \n        <ion-row>\n            <ion-col>\n                <div>\n                      <ion-card class="card" (click)="anniversary(\'Anniversary\')" style="background:#FFBF95"  class="animated  slideInDown delay-2s">\n                              <ion-card-content>\n                                  <img src="../../assets/imgs/icons8_Wedding_Gift_96px.png" alt="">\n                                  <ion-card-title>\n                                      <h3>Anniversary</h3>\n                                      \n                                    </ion-card-title>\n                                  </ion-card-content>\n                              \n                          </ion-card>\n                </div>\n            </ion-col>\n            <ion-col>\n                <div>\n                      <ion-card class="card"  style="background:#FFB1B5" (click)="wedding(\'Wedding\')" class="animated  slideInLeft delay-2s">\n                              <ion-card-content> \n                                 <img src="../../assets/imgs/icons8_Diamond_Ring_100px.png" alt="">\n                                  <ion-card-title>\n                                      <h3>Wedding</h3>\n                                      \n                                    </ion-card-title>\n                                </ion-card-content>\n                          </ion-card>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n              <div>\n                    <ion-card class="card"  (click)="thinking-of-you(\'Thinking of you\')"style="background:#F8A7C8"  class="animated  slideInDown delay-2s">\n                            <ion-card-content>\n                                <img src="../../assets/imgs/icons8_Collaboration_100px_1.png" alt="">\n                                <ion-card-title>\n                                    <h3>Thinking of you</h3>\n                                    \n                                  </ion-card-title>\n                                </ion-card-content>\n                            \n                        </ion-card>\n              </div>\n          </ion-col>\n          <ion-col>\n              <div>\n                    <ion-card class="card" style="background:#A9D67E"  (click)="other(\'General\')" class="animated  slideInLeft delay-2s">\n                            <ion-card-content> \n                               <img src="../../assets/imgs/icons8_People_100px.png" alt="">\n                                <ion-card-title>\n                                    <h3>General</h3>\n                                    \n                                  </ion-card-title>\n                              </ion-card-content>\n                        </ion-card>\n              </div>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n</div>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\event\event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favourite_messages_favourite_messages__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = /** @class */ (function () {
    function PopoverPage(navCtrl, navParams, viewCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
    }
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage.prototype.signout = function () {
        var _this = this;
        this.db.signout();
        var confirm = this.alertCtrl.create({
            title: 'Log out',
            message: 'Do you want log out?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        confirm.present();
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.favorite = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__favourite_messages_favourite_messages__["a" /* FavouriteMessagesPage */]);
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-popover',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\popover\popover.html"*/'<!--\n  Generated template for the PopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n  <ion-list text-center class="" >\n   <button ion-button clear  (click)="favorite()">Favorite</button> <br>\n   <button ion-button clear (click)="signout()">Log Out</button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\popover\popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ })

},[502]);
//# sourceMappingURL=main.js.map