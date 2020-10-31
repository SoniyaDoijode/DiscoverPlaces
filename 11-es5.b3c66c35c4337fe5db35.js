!function(){function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function o(n,o){for(var i=0;i<o.length;i++){var e=o[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"tx+c":function(i,e,t){"use strict";t.r(e),t.d(e,"BookingsPageModule",(function(){return v}));var s=t("ofXK"),b=t("3Pt+"),c=t("TEn/"),r=t("tyNb"),a=t("fXoL"),l=t("VFTF");function u(n,o){1&n&&(a.Kb(0,"ion-col",4),a.Kb(1,"p"),a.ic(2,"No bookings found!!"),a.Jb(),a.Jb())}function f(n,o){if(1&n){var i=a.Lb();a.Kb(0,"ion-item-sliding",null,7),a.Kb(2,"ion-item"),a.Kb(3,"ion-avatar",1),a.Ib(4,"ion-img",8),a.Jb(),a.Kb(5,"ion-label"),a.Kb(6,"h5"),a.ic(7),a.Jb(),a.Kb(8,"p"),a.ic(9),a.Jb(),a.Jb(),a.Jb(),a.Kb(10,"ion-item-options"),a.Kb(11,"ion-item-option",9),a.Sb("click",(function(){a.dc(i);var n=o.$implicit,e=a.cc(1);return a.Ub(2).onCancelBooking(n.id,e)})),a.Ib(12,"ion-icon",10),a.Jb(),a.Jb(),a.Jb()}if(2&n){var e=o.$implicit;a.xb(4),a.Zb("src",e.placeImage),a.xb(3),a.jc(e.placeTitle),a.xb(2),a.jc(e.guestNumber)}}function g(n,o){if(1&n&&(a.Kb(0,"ion-col",5),a.Kb(1,"ion-list"),a.hc(2,f,13,3,"ion-item-sliding",6),a.Jb(),a.Jb()),2&n){var i=a.Ub();a.xb(2),a.Zb("ngForOf",i.loadedBookings)}}var d,k,m,h=[{path:"",component:(d=function(){function i(o,e){n(this,i),this.bookingsService=o,this.loadingCtrl=e}var e,t,s;return e=i,(t=[{key:"ngOnInit",value:function(){var n=this;this.bookingsSub=this.bookingsService.bookings.subscribe((function(o){n.loadedBookings=o})),console.log(this.loadedBookings)}},{key:"ionViewWillEnter",value:function(){var n=this;this.isLoading=!0,this.loadingCtrl.create({message:"Loading..."}).then((function(o){o.present(),n.bookingsService.fetchBookings().subscribe((function(){n.isLoading=!1,o.dismiss()}))}))}},{key:"onCancelBooking",value:function(n,o){var i=this;o.close(),this.loadingCtrl.create({message:"Cancelling..."}).then((function(o){o.present(),i.bookingsService.cancelBooking(n).subscribe((function(){o.dismiss()}))}))}},{key:"ngOnDestroy",value:function(){this.bookingsSub&&this.bookingsSub.unsubscribe()}}])&&o(e.prototype,t),s&&o(e,s),i}(),d.\u0275fac=function(n){return new(n||d)(a.Hb(l.a),a.Hb(c.V))},d.\u0275cmp=a.Bb({type:d,selectors:[["app-bookings"]],decls:11,vars:2,consts:[["color","primary"],["slot","start"],["size-md","6","offset-md","3","class","ion-text-center",4,"ngIf"],["size-md","6","offset-md","3",4,"ngIf"],["size-md","6","offset-md","3",1,"ion-text-center"],["size-md","6","offset-md","3"],[4,"ngFor","ngForOf"],["slidingBooking",""],[3,"src"],["color","danger",3,"click"],["name","trash","slot","icon-only"]],template:function(n,o){1&n&&(a.Kb(0,"ion-header"),a.Kb(1,"ion-toolbar",0),a.Kb(2,"ion-buttons",1),a.Ib(3,"ion-menu-button"),a.Jb(),a.Kb(4,"ion-title"),a.ic(5,"Your Bookings"),a.Jb(),a.Jb(),a.Jb(),a.Kb(6,"ion-content"),a.Kb(7,"ion-grid"),a.Kb(8,"ion-row"),a.hc(9,u,3,0,"ion-col",2),a.hc(10,g,3,1,"ion-col",3),a.Jb(),a.Jb(),a.Jb()),2&n&&(a.xb(9),a.Zb("ngIf",!o.isLoading&&(!o.loadedBookings||o.loadedBookings.length<=0)),a.xb(1),a.Zb("ngIf",!o.isLoading&&o.loadedBookings&&o.loadedBookings.length>0))},directives:[c.r,c.R,c.h,c.C,c.Q,c.o,c.q,c.F,s.k,c.n,c.A,s.j,c.y,c.v,c.d,c.t,c.z,c.x,c.w,c.s],styles:[""]}),d)}],p=((m=function o(){n(this,o)}).\u0275mod=a.Fb({type:m}),m.\u0275inj=a.Eb({factory:function(n){return new(n||m)},imports:[[r.i.forChild(h)],r.i]}),m),v=((k=function o(){n(this,o)}).\u0275mod=a.Fb({type:k}),k.\u0275inj=a.Eb({factory:function(n){return new(n||k)},imports:[[s.b,b.f,c.T,p]]}),k)}}])}();