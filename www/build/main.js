webpackJsonp([7],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutomatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_contacts__ = __webpack_require__(76);
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
    function AutomatePage(navCtrl, navParams, alertCtrl, actionSheetCtrl, localNotifications, sms, contacts) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.localNotifications = localNotifications;
        this.sms = sms;
        this.contacts = contacts;
        //sms ;
        this.graduation = this.navParams.get("graduation");
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
    AutomatePage.prototype.autoMessagessssss = function () {
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
                }, {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-automate',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\automate\automate.html"*/'<!--\n\n  Generated template for the AutomatePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>automate</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding >\n\n    <ion-card *ngFor="let a of graduation; let u = index"  class="main2" (click)="autoMessagessssss()">\n\n\n\n      <div > \n\n        <ion-card-content > \n\n          <ion-card-title>\n\n   \n\n            <h2> {{a.message}} </h2>\n\n            </ion-card-title>\n\n   \n\n       </ion-card-content>\n\n      </div>\n\n        \n\n   \n\n      </ion-card>\n\n      <!-- <button ion-button block round (click)="sendvia()">Send via</button> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\automate\automate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_contacts__["a" /* Contacts */]])
    ], AutomatePage);
    return AutomatePage;
}());

//# sourceMappingURL=automate.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(86);
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
        if (this.user.email != null && this.user.password != null && this.user.name != null) {
            this.db.register(user.email, user.password, user.name).then(function () {
                var toast = _this.toastCtrl.create({
                    message: 'Successfully Registered',
                    duration: 3000,
                    position: 'middle'
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
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\register\register.html"*/'<ion-content padding class="ion-content" >\n\n\n\n\n\n\n\n  \n\n\n\n\n\n  <div class="main" > \n\n    <!-- app logo -->\n\n      <div class="logo" >\n\n          <h1>MIT</h1>\n\n          <p>Moment in Time</p>\n\n        </div>\n\n         <!-- end of app logo -->\n\n\n\n        <!-- start inputs section -->\n\n        <div class="inputs">\n\n            <ion-item class="ion-item"  >\n\n              <ion-label ><ion-icon color="primary" ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n\n              <ion-input type="userame" value="" placeholder=" Username"[(ngModel)]="user.name"></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item  class="ion-item">\n\n              <ion-label ><ion-icon  color="primary" name="mail"></ion-icon></ion-label>\n\n              <ion-input type="email" value="" placeholder="Email" [(ngModel)]="user.email"></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item  class="ion-item" >\n\n              <ion-label><ion-icon color="primary"  name="lock"></ion-icon></ion-label>\n\n              <ion-input type="password" placeholder="Password"  [(ngModel)]="user.password"></ion-input>\n\n            </ion-item>\n\n\n\n          \n\n          <div class="button" >\n\n            <button  ion-button round color="blue" (click)="Register(user)" full>Register</button>\n\n          </div>\n\n             </div>\n\n               <!-- close inputs section  -->\n\n            \n\n          </div>\n\n          <!-- close main section -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalizedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_message__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_contacts__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(119);
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
 * Generated class for the PersonalizedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalizedPage = /** @class */ (function () {
    function PersonalizedPage(navCtrl, navParams, contacts, alertCtrl, actionSheetCtrl, localNotifications, sms) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contacts = contacts;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.localNotifications = localNotifications;
        this.sms = sms;
        this.chosenDate = this.navParams.get("chosenDate");
        this.chosenTime = this.navParams.get("chosenTime");
    }
    PersonalizedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalizedPage');
        console.log(this.chosenDate);
        console.log(this.chosenTime);
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
                }, {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
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
                    text: 'Schedule',
                    handler: function () {
                        //  this.chosenDate = moment(this.chosenDate + " " + this.chosenTime.format('MMMM DD YYYY, h:mm:ss a')) ;
                        //  this.localNotifications.schedule({
                        //    text: 'MomementInTime',
                        //    trigger: {at: new Date(new Date(this.chosenDate) )
                        //   }
                        //  })
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
        var user = firebase.auth().currentUser.uid;
        console.log(user);
        firebase.database().ref('momentsintime/').push({
            sent: this.name,
            cell: this.phoneNumber,
            Message: this.message,
            user: user
        });
    };
    PersonalizedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personalized',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\personalized\personalized.html"*/'\n\n<ion-header>\n\n      <button ion-button clear icon-only large color="light"(click)="back()">\n\n          <ion-icon name="arrow-dropleft-circle"></ion-icon>\n\n        </button>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding no-lines text-center class="background">\n\n  <div class="box" >\n\n    <br>\n\n  <h1>Write your message</h1>\n\n  <ion-list>\n\n    <ion-item class="text">\n\n        <ion-textarea placeholder="Type your message....."   [(ngModel)]="message"></ion-textarea>\n\n      </ion-item>\n\n    </ion-list>\n\n  \n\n  <button ion-button block round (click)="sendvia()">Send via</button>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\personalized\personalized.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_contacts__["a" /* Contacts */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__["a" /* SMS */]])
    ], PersonalizedPage);
    return PersonalizedPage;
}());

//# sourceMappingURL=personalized.js.map

/***/ }),

/***/ 170:
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
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		703,
		6
	],
	"../pages/automate/automate.module": [
		704,
		5
	],
	"../pages/login/login.module": [
		705,
		4
	],
	"../pages/message/message.module": [
		706,
		3
	],
	"../pages/personalized/personalized.module": [
		707,
		2
	],
	"../pages/register/register.module": [
		708,
		1
	],
	"../pages/sms/sms.module": [
		709,
		0
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
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\about\about.html"*/'\n<ion-content padding class="background">\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\contact\contact.html"*/'\n\n<ion-content padding class="background">\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_message__ = __webpack_require__(64);
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
    function HomePage(navCtrl, db) {
        this.navCtrl = navCtrl;
        this.db = db;
    }
    HomePage.prototype.graduation = function () {
        var _this = this;
        this.db.GraduationMessages().then(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], { graduationMsg: data });
        }, function (error) { });
    };
    HomePage.prototype.wedding = function () {
        var _this = this;
        this.db.weddingMessage().then(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], { graduationMsg: data });
        }, function (error) { });
    };
    HomePage.prototype.anniversary = function () {
        var _this = this;
        this.db.anniversaryMessage().then(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], { graduationMsg: data });
        }, function (error) { });
    };
    HomePage.prototype.newJob = function () {
        var _this = this;
        this.db.newJobMessage().then(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], { graduationMsg: data });
        }, function (error) { });
    };
    HomePage.prototype.babyShower = function () {
        var _this = this;
        this.db.babyShowerMessages().then(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], { graduationMsg: data });
        }, function (error) { });
    };
    HomePage.prototype.birthday = function () {
        var _this = this;
        this.db.birthdayMessages().then(function (data) {
            console.log(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], { graduationMsg: data });
        }, function (error) { });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\home\home.html"*/'<ion-content padding class="no-scroll" >\n\n        <div class="body" ion-fixed >\n\n          <ion-grid no-padding fixed-content >\n\n              <ion-row>\n\n                  <ion-col  >\n\n                      <div>\n\n                            <ion-card style="background:#87e0ff" class="card" (click)="birthday()">\n\n                                    <ion-card-content> \n\n                                        <img src="../../assets/imgs/icons8_Wedding_Cake_96px_1.png" alt="" >\n\n                                      <ion-card-title>\n\n                                          <h3>Birthday</h3>\n\n                                         \n\n                                        </ion-card-title>\n\n                                    </ion-card-content>\n\n                                  </ion-card>\n\n                            \n\n                      </div>\n\n                  </ion-col>\n\n                  <ion-col>\n\n                    <div>\n\n                            <ion-card class="card" style="background:#87e0ff"  (click)="graduation()">\n\n                                    <ion-card-content> \n\n                                       <img src="../../assets/imgs/icons8_Graduation_Cap_96px.png" alt="">\n\n                                        <ion-card-title>\n\n                                            <h3>Graduation</h3>\n\n                                            \n\n                                          </ion-card-title>\n\n                                      </ion-card-content>\n\n                                </ion-card>\n\n                    </div>\n\n                </ion-col>\n\n              </ion-row>\n\n        \n\n              <ion-row>\n\n                  <ion-col col >\n\n                      <div>\n\n                            <ion-card class="card" style="background:#53c7f0" (click)="babyShower()">\n\n                                    <ion-card-content > \n\n                                        <img src="../../assets/imgs/icons8_Mother_96px.png" alt="">\n\n                                        <ion-card-title>\n\n                                            <h3>Baby Shower</h3>\n\n                                            \n\n                                          </ion-card-title>\n\n                                      </ion-card-content>\n\n                                    </ion-card>\n\n                              \n\n                      </div>\n\n                  </ion-col>\n\n                  <ion-col>\n\n                      <div>\n\n                            <ion-card class="card" style="background:#53c7f0" (click)="newJob()">\n\n                                    <ion-card-content> \n\n                                        <img src="../../assets/imgs/icons8_Briefcase_96px.png" alt="">\n\n                                        <ion-card-title>\n\n                                            <h3>New Job/career</h3>\n\n                                          </ion-card-title>\n\n                                      </ion-card-content>\n\n                                </ion-card>\n\n                      </div>\n\n                  </ion-col>\n\n              </ion-row>\n\n              \n\n              <ion-row>\n\n                  <ion-col>\n\n                      <div>\n\n                            <ion-card class="card" style="background:#1d97c1" (click)="anniversary()" >\n\n                                    \n\n                                        <img src="../../assets/imgs/icons8_Wedding_Gift_60px.png" alt="">\n\n                                        <ion-card-title>\n\n                                            <h3>Anniversary</h3>\n\n                                            \n\n                                          </ion-card-title>\n\n                                    \n\n                                </ion-card>\n\n                      </div>\n\n                  </ion-col>\n\n                  <ion-col>\n\n                      <div>\n\n                            <ion-card class="card" style="background:#1d97c1"  (click)="wedding()">\n\n                                    <ion-card-content> \n\n                                       <img src="../../assets/imgs/icons8_Heart_With_Arrow_96px.png" alt="">\n\n                                        <ion-card-title>\n\n                                            <h3>Wedding</h3>\n\n                                            \n\n                                          </ion-card-title>\n\n                                      </ion-card-content>\n\n                                </ion-card>\n\n                      </div>\n\n                  </ion-col>\n\n              </ion-row>\n\n          </ion-grid>\n\n        </div>\n\n        \n\n      </ion-content>'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\admin\admin.html"*/'<!--\n\n  Generated template for the AdminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Admin</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item>\n\n        <ion-label>Gaming</ion-label>\n\n        <ion-select [(ngModel)]="relationship">\n\n            <ion-option value="newJob">job</ion-option>\n\n            <ion-option value="Birthday">Birthday</ion-option>\n\n            <ion-option value="babyShower">Baby shower</ion-option>\n\n          <ion-option value="friend">friend</ion-option>\n\n          <ion-option value="spouse">spouse</ion-option>\n\n          <ion-option value="family">family</ion-option>\n\n          <ion-option value="Lover">Lover</ion-option>\n\n          <ion-option value="Graduation">Graduation</ion-option>\n\n          <ion-option value="Weddings">Weddings</ion-option>\n\n          <ion-option value="ANNIVERSARY">ANNIVERSARY</ion-option>\n\n          <ion-option value="Other">Other</ion-option>\n\n\n\n         \n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n        <ion-textarea  [(ngModel)]="message"></ion-textarea>\n\n      </ion-item>\n\n\n\n      <button (click)="send()">Send</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_message__ = __webpack_require__(64);
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
    function LoginPage(navCtrl, navParams, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.user = {};
        this.message = function () {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__message_message__["a" /* MessagePage */]);
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.Login = function (user) {
        //alert("clicked")
        var _this = this;
        // var users = firebase.auth().currentUser.uid;
        if (user.email != undefined && user.password != undefined) {
            this.db.login(user.email, user.password).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                var alert = _this.alertCtrl.create({
                    title: 'CONFIRMATION',
                    subTitle: error,
                    buttons: ['OK']
                });
                alert.present();
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Confirmarion',
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
        alert("ggg");
        this.db.SignWithGoogle();
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding class="background" >\n\n  <div class="body" ion-fixed >\n\n\n\n    <div class="logo-sec">\n\n     <h1>MIT</h1>\n\n     <p>Moment in Time</p>\n\n   </div>\n\n   <!-- close body -->\n\n\n\n   <div class="inputs" >\n\n     <ion-list no-lines>\n\n     <ion-item>\n\n       <ion-label> <ion-icon color="primary" name="mail"></ion-icon>\n\n       </ion-label>\n\n       <ion-input type="email"  placeholder="Email" [(ngModel)]="user.email"></ion-input>\n\n     </ion-item>\n\n   \n\n     <ion-item>\n\n       <ion-label><ion-icon color="primary" name="unlock"></ion-icon></ion-label>\n\n       <ion-input type="password"  placeholder="Password" [(ngModel)]="user.password"></ion-input>\n\n     </ion-item>\n\n   </ion-list>\n\n   <div class="buttons" >\n\n     <button block ion-button round class="Login" (click)="Login(user)">Login</button>\n\n    </div>\n\n  </div>\n\n  <!-- close inputs -->\n\n\n\n  <div class="signwith" >\n\n      <h6>or sign in with:</h6>\n\n      <ion-grid class="signin-icons">\n\n        <ion-row align-items-center>\n\n          <ion-col col-2 align-self-center (click)="logInWithFaceBook()">\n\n            <img class="img" src="../../assets/imgs/facebook (2).svg" alt="facebook icon">\n\n          </ion-col>\n\n          <ion-col col-2 (click)="loginwithGooogle()">\n\n            <img  class="img" src="../../assets/imgs/google-plus.svg" alt="google icon">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n  </div>\n\n  <!-- close sigin with -->\n\n  <div >\n\n      <ion-grid class="register">\n\n          <ion-row >\n\n            <ion-col col-6  >\n\n              <div  >\n\n                 <button ion-button clear color="dark" class="reg"  (click)="register()">Don\'t have an account?  </button>\n\n              </div>\n\n               \n\n            </ion-col>\n\n            <ion-col >\n\n              <div>\n\n                 <button ion-button clear class="Forget" color="dark" (click)="forgetPassword(user)">Forget Password </button>\n\n              </div>\n\n               \n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n       \n\n \n\n\n\n     \n\n           \n\n\n\n  </div>\n\n  <!-- close register section -->\n\n\n\n  \n\n   \n\n  </div>           \n\n  \n\n  \n\n   <!-- <button ion-button (click)="message()">message</button> -->\n\n   </ion-content>'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_database_database__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_personalized_personalized__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_automate_automate__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_message_message__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_sms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_contacts__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_local_notifications__ = __webpack_require__(119);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */], __WEBPACK_IMPORTED_MODULE_14__pages_personalized_personalized__["a" /* PersonalizedPage */], __WEBPACK_IMPORTED_MODULE_15__pages_automate_automate__["a" /* AutomatePage */], __WEBPACK_IMPORTED_MODULE_19__pages_message_message__["a" /* MessagePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/automate/automate.module#AutomatePageModule', name: 'AutomatePage', segment: 'automate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personalized/personalized.module#PersonalizedPageModule', name: 'PersonalizedPage', segment: 'personalized', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sms/sms.module#SmsPageModule', name: 'SmsPage', segment: 'sms', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */], __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_14__pages_personalized_personalized__["a" /* PersonalizedPage */], __WEBPACK_IMPORTED_MODULE_15__pages_automate_automate__["a" /* AutomatePage */], __WEBPACK_IMPORTED_MODULE_19__pages_message_message__["a" /* MessagePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_10__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_20__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_contacts__["a" /* Contacts */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_local_notifications__["a" /* LocalNotifications */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__automate_automate__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personalized_personalized__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__ = __webpack_require__(76);
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
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagePage');
        console.log(this.graduationMsg);
        console.log(this.peronalisedMsg);
    };
    MessagePage.prototype.message = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose message type',
            buttons: [
                {
                    text: 'Personalize Message',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__personalized_personalized__["a" /* PersonalizedPage */], { chosenDate: _this.date, chosenTime: _this.time });
                    }
                }, {
                    text: 'Automated Message',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__automate_automate__["a" /* AutomatePage */], { graduation: _this.graduationMsg });
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
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\message\message.html"*/'\n\n\n\n\n\n<ion-content padding class="background">\n\n  <div class="body">\n\n    <div>\n\n      <button ion-button clear icon-only large color="light"(click)="back()">\n\n        <ion-icon name="arrow-dropleft-circle"></ion-icon>\n\n      </button>\n\n        <h1>Get People & Days Worth Celebrating.</h1>\n\n    </div>\n\n    <div class="top">\n\n        <ion-list >\n\n            <ion-item class="item">\n\n              <ion-label>Send to</ion-label>\n\n              <ion-select [(ngModel)]="sendto">\n\n                <ion-option>Friend</ion-option>\n\n                <ion-option>Family</ion-option>\n\n                <ion-option>Lover</ion-option>\n\n                <ion-option>Other</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-list>\n\n         \n\n       <ion-item>\n\n        <ion-label>Start Time</ion-label>\n\n        <ion-datetime displayFormat="h:mm A" pickerFormat="hh:mm A"  [(ngModel)]="time"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Start Date</ion-label>\n\n            <ion-datetime displayFormat="DDD MMM YYYY"  [(ngModel)]="date"></ion-datetime>\n\n            </ion-item>\n\n\n\n  \n\n    </div>\n\n    <div class="buttons">\n\n        <button ion-button block round (click)="message()">Message</button>\n\n        <br>\n\n       \n\n    </div>\n\n  \n\n  \n\n\n\n      \n\n\n\n  </div>\n\n    \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\message\message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__["a" /* Contacts */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(86);
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
    function MyApp(platform, statusBar, splashScreen) {
        // firebase.auth().onAuthStateChanged(user => {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        //   if (user) {
        //     this.rootPage = LoginPage
        //     console.log(user)
        //   } else {
        //     // No user is signed in.
        //    // this.rootPage = HomePage
        //   }
        // })
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_auth__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_auth__);
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
    function DatabaseProvider(http, fire) {
        this.http = http;
        this.fire = fire;
        this.graduationArray = [];
        this.weddingArray = [];
        this.birthdayArray = [];
        this.anniversaryArray = [];
        this.babyShowerArray = [];
        this.newJobArray = [];
        this.provider = new firebase.auth.GoogleAuthProvider();
        console.log('Hello DatabaseProvider Provider');
    }
    DatabaseProvider.prototype.register = function (email, password, name) {
        var users = firebase.auth().currentUser;
        return new Promise(function (resolve, reject) {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
                firebase.database().ref("user/" + users.uid).set({
                    name: name
                });
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
        return firebase.auth().signInWithPopup(this.provider).then(function (result) {
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
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_auth__["AngularFireAuth"]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(318);
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
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\tabs\tabs.html"*/'<ion-tabs color="b" >\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Reveiw" tabIcon="ios-bookmark"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Notification" tabIcon="ios-notifications"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Kgaot\Desktop\GroupProject\momentsInTime\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[363]);
//# sourceMappingURL=main.js.map