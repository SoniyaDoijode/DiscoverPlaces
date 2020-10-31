!function(){function i(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function n(i,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Yj9t:function(o,e,t){"use strict";t.r(e),t.d(e,"AuthPageModule",(function(){return v}));var a=t("ofXK"),r=t("3Pt+"),s=t("TEn/"),c=t("tyNb"),l=t("fXoL"),b=t("qXBG");function u(i,n){1&i&&(l.Kb(0,"ion-item",13),l.Kb(1,"ion-label",14),l.ic(2,"Should be a valid email address"),l.Jb(),l.Jb())}function d(i,n){1&i&&(l.Kb(0,"ion-item",13),l.Kb(1,"ion-label",14),l.ic(2,"Should atleast be 6 characters long"),l.Jb(),l.Jb())}var g,f,h,m=[{path:"",component:(g=function(){function o(n,e,t,a){i(this,o),this.authService=n,this.router=e,this.loadingCtrl=t,this.alertCtrl=a,this.isLogin=!0}var e,t,a;return e=o,(t=[{key:"ngOnInit",value:function(){}},{key:"authenticate",value:function(i,n){var o=this;this.isLoading=!0,this.loadingCtrl.create({keyboardClose:!0,message:"Logging in....."}).then((function(e){e.present(),(o.isLogin?o.authService.login(i,n):o.authService.signUp(i,n)).subscribe((function(i){console.log(i),o.isLoading=!1,e.dismiss(),o.router.navigateByUrl("/places/tabs/discover")}),(function(i){e.dismiss();var n=i.error.error.message;console.log("code",n);var t="Could not sign you up, please try again";"EMAIL_EXISTS"===n?t="This email already exists!":"EMAIL_NOT_FOUND"===n?t=" email address could not be found!":"INVALID_PASSWORD"===n&&(t="This password is not correct!"),console.log("message_____ ",t),o.showAlert(t)}))}))}},{key:"onSubmit",value:function(i){if(console.log(i),i.valid){var n=i.value.email,o=i.value.password;console.log(n,o),this.authenticate(n,o),i.reset()}}},{key:"onSwitchAuthMode",value:function(){this.isLogin=!this.isLogin}},{key:"showAlert",value:function(i){this.alertCtrl.create({header:"Authentication failed!",message:i,buttons:["Okay"]}).then((function(i){i.present()}))}}])&&n(e.prototype,t),a&&n(e,a),o}(),g.\u0275fac=function(i){return new(i||g)(l.Hb(b.a),l.Hb(c.g),l.Hb(s.V),l.Hb(s.b))},g.\u0275cmp=l.Bb({type:g,selectors:[["app-auth"]],decls:29,vars:6,consts:[["color","primary"],[1,"ion-padding"],[3,"ngSubmit"],["f","ngForm"],["size-sm","6","offset-sm","3"],["position","floating"],["type","email","ngModel","","name","email","required","","email",""],["email","ngModel"],["lines","none",4,"ngIf"],["type","Password","ngModel","","name","password","required","","minlength","6"],["password","ngModel"],["type","button","color","primary","fill","clear","expand","block",3,"click"],["type","submit","color","primary","expand","block",3,"disabled"],["lines","none"],[2,"color","red"]],template:function(i,n){if(1&i){var o=l.Lb();l.Kb(0,"ion-header"),l.Kb(1,"ion-toolbar",0),l.Kb(2,"ion-title"),l.ic(3),l.Jb(),l.Jb(),l.Jb(),l.Kb(4,"ion-content",1),l.Kb(5,"form",2,3),l.Sb("ngSubmit",(function(){l.dc(o);var i=l.cc(6);return n.onSubmit(i)})),l.Kb(7,"ion-grid"),l.Kb(8,"ion-row"),l.Kb(9,"ion-col",4),l.Kb(10,"ion-list"),l.Kb(11,"ion-item"),l.Kb(12,"ion-label",5),l.ic(13," Email "),l.Jb(),l.Ib(14,"ion-input",6,7),l.Jb(),l.hc(16,u,3,0,"ion-item",8),l.Kb(17,"ion-item"),l.Kb(18,"ion-label",5),l.ic(19," Password "),l.Jb(),l.Ib(20,"ion-input",9,10),l.Jb(),l.hc(22,d,3,0,"ion-item",8),l.Jb(),l.Jb(),l.Jb(),l.Kb(23,"ion-row"),l.Kb(24,"ion-col",4),l.Kb(25,"ion-button",11),l.Sb("click",(function(){return n.onSwitchAuthMode()})),l.ic(26),l.Jb(),l.Kb(27,"ion-button",12),l.ic(28),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb()}if(2&i){var e=l.cc(6),t=l.cc(15),a=l.cc(21);l.xb(3),l.jc(n.isLogin?"Login":"Signup"),l.xb(13),l.Zb("ngIf",!t.valid&&t.touched),l.xb(6),l.Zb("ngIf",!a.valid&&a.touched),l.xb(4),l.kc("Switch to ",n.isLogin?"Signup":"Login",""),l.xb(1),l.Zb("disabled",!e.valid),l.xb(1),l.kc(" ",n.isLogin?"Login":"SignUp"," ")}},directives:[s.r,s.R,s.Q,s.o,r.q,r.k,r.l,s.q,s.F,s.n,s.A,s.v,s.z,s.u,s.db,r.j,r.m,r.o,r.a,a.k,r.g,s.g],styles:[""]}),g)}],p=((h=function n(){i(this,n)}).\u0275mod=l.Fb({type:h}),h.\u0275inj=l.Eb({factory:function(i){return new(i||h)},imports:[[c.i.forChild(m)],c.i]}),h),v=((f=function n(){i(this,n)}).\u0275mod=l.Fb({type:f}),f.\u0275inj=l.Eb({factory:function(i){return new(i||f)},imports:[[a.b,r.f,s.T,p]]}),f)}}])}();