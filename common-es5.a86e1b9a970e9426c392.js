!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t,n,i,o,r,a){try{var c=e[r](a),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(i,o)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function c(e){r(a,i,o,c,s,"next",e)}function s(e){r(a,i,o,c,s,"throw",e)}c(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return c}));var i={getEngine:function(){var e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(e){var t=this.getEngine();if(t){var n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})}},notification:function(e){var t=this.getEngine();if(t){var n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},o=function(){i.selection()},r=function(){i.selectionStart()},a=function(){i.selectionChanged()},c=function(){i.selectionEnd()},s=function(e){i.impact(e)}},"6i10":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i={bubbles:{dur:1e3,circles:9,fn:function(e,t,n){var i=e*t/n-e+"ms",o=2*Math.PI*t/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:function(e,t,n){var i=t/n,o=e*i-e+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,t){return{r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(e,t,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":e*t/n-e+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,t,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":e*t/n-e+"ms"}}}}}},NqGI:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var i=function(){var e=a(regeneratorRuntime.mark((function e(t,n,i,o,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t.attachViewToDom(n,i,r,o));case 2:if("string"==typeof i||i instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof i?n.ownerDocument&&n.ownerDocument.createElement(i):i,o&&o.forEach((function(e){return a.classList.add(e)})),r&&Object.assign(a,r),n.appendChild(a),e.t0=a.componentOnReady,!e.t0){e.next=12;break}return e.next=12,a.componentOnReady();case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})));return function(t,n,i,o,r){return e.apply(this,arguments)}}(),o=function(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},Qe3P:function(t,n,r){"use strict";r.d(n,"a",(function(){return g}));var a,c=r("2Vo4"),s=r("LRne"),l=function e(t,n,i,r,a,c,s,l,u){o(this,e),this.id=t,this.title=n,this.description=i,this.imageUrl=r,this.price=a,this.availableFrom=c,this.availableTo=s,this.userId=l,this.location=u},u=r("lJxs"),b=r("vkgz"),f=r("IzEk"),d=r("eIep"),p=r("fXoL"),m=r("qXBG"),h=r("tk/3"),g=((a=function(){function t(e,n){o(this,t),this.authService=e,this.http=n,this._places=new c.a([])}return i(t,[{key:"fetchPlaces",value:function(){var e=this;return this.http.get("https://ionic-angular-app-fc39f.firebaseio.com/offered-places.json").pipe(Object(u.a)((function(e){var t=[];for(var n in e)console.log(n,"key"),e.hasOwnProperty(n)&&(t.push(new l(n,e[n].title,e[n].description,e[n].imageUrl,e[n].price,new Date(e[n].availableFrom),new Date(e[n].availableTo),e[n].userId,e[n].location)),console.log(t));return t})),Object(b.a)((function(t){e._places.next(t)})))}},{key:"getPlace",value:function(e){return this.http.get("https://ionic-angular-app-fc39f.firebaseio.com/offered-places/".concat(e,".json")).pipe(Object(u.a)((function(t){return console.log(t),new l(e,t.title,t.description,t.imageUrl,t.price,new Date(t.availableFrom),new Date(t.availableFrom),t.userId,t.location)})))}},{key:"addPlace",value:function(e,t,n,i,o,r){var a,c,s=this;return this.authService.userId.pipe(Object(f.a)(1),Object(d.a)((function(a){if(!a)throw new Error("No user Found");return c=new l(Math.random().toString(),e,t,"https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",n,i,o,a,r),s.http.post("https://ionic-angular-app-fc39f.firebaseio.com/offered-places.json",Object.assign(Object.assign({},c),{id:null}))}))).pipe(Object(d.a)((function(e){return a=e.name,s.places})),Object(f.a)(1),Object(b.a)((function(e){c.id=a,s._places.next(e.concat(c))})))}},{key:"updatePlace",value:function(t,n,i){var o,r=this;return this.places.pipe(Object(f.a)(1),Object(d.a)((function(e){return!e||e.length<=0?r.fetchPlaces():Object(s.a)(e)})),Object(d.a)((function(a){var c=a.findIndex((function(e){return e.id==t})),s=(o=e(a))[c];return o[c]=new l(s.id,n,i,s.imageUrl,s.price,s.availableFrom,s.availableTo,s.userId,s.location),r.http.put("https://ionic-angular-app-fc39f.firebaseio.com/offered-places/".concat(t,".json"),Object.assign(Object.assign({},o[c]),{id:null}))})),Object(b.a)((function(){r._places.next(o)})))}},{key:"places",get:function(){return this._places.asObservable()}}]),t}()).\u0275fac=function(e){return new(e||a)(p.Ob(m.a),p.Ob(h.a))},a.\u0275prov=p.Db({token:a,factory:a.\u0275fac,providedIn:"root"}),a)},"U/uv":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("sxy2"),o=n("ItpF"),r=n("2c9M"),a=function(e,t){var n,a,c=function(e,i,o){if("undefined"!=typeof document){var r=document.elementFromPoint(e,i);r&&t(r)?r!==n&&(l(),s(r,o)):l()}},s=function(e,t){n=e,a||(a=n);var o=n;Object(i.g)((function(){return o.classList.add("ion-activated")})),t()},l=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(n){var t=n;Object(i.g)((function(){return t.classList.remove("ion-activated")})),e&&a!==n&&n.click(),n=void 0}};return Object(o.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:function(e){return c(e.currentX,e.currentY,r.a)},onMove:function(e){return c(e.currentX,e.currentY,r.b)},onEnd:function(){l(!0),Object(r.e)(),a=void 0}})}},VFTF:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r,a=n("2Vo4"),c=n("IzEk"),s=n("eIep"),l=n("vkgz"),u=n("lJxs"),b=function e(t,n,i,r,a,c,s,l,u,b){o(this,e),this.id=t,this.placeId=n,this.userId=i,this.placeTitle=r,this.placeImage=a,this.firstName=c,this.lastName=s,this.guestNumber=l,this.bookedFrom=u,this.bookedTo=b},f=n("fXoL"),d=n("qXBG"),p=n("tk/3"),m=((r=function(){function e(t,n){o(this,e),this.authService=t,this.http=n,this._bookings=new a.a([])}return i(e,[{key:"addBooking",value:function(e,t,n,i,o,r,a,u){var f,d,p=this;return this.authService.userId.pipe(Object(c.a)(1),Object(s.a)((function(c){if(!c)throw new Error("No userid found");return d=new b(Math.random().toString(),e,c,t,n,i,o,r,a,u),p.http.post("https://ionic-angular-app-fc39f.firebaseio.com/bookings.json",Object.assign(Object.assign({},d),{id:null}))})),Object(s.a)((function(e){return f=e.name,p.bookings})),Object(c.a)(1),Object(l.a)((function(e){d.id=f,p._bookings.next(e.concat(d))})))}},{key:"cancelBooking",value:function(e){var t=this;return this.http.delete("https://ionic-angular-app-fc39f.firebaseio.com/bookings/".concat(e,".json")).pipe(Object(s.a)((function(){return t.bookings})),Object(c.a)(1),Object(l.a)((function(n){t._bookings.next(n.filter((function(t){return t.id!==e})))})))}},{key:"fetchBookings",value:function(){var e=this;return this.authService.userId.pipe(Object(c.a)(1),Object(s.a)((function(t){if(!t)throw new Error("No user found");return e.http.get('https://ionic-angular-app-fc39f.firebaseio.com/bookings.json?orderBy="userId"&equalTo="'.concat(t,'"'))})),Object(u.a)((function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(new b(n,e[n].placeId,e[n].userId,e[n].placeTitle,e[n].placeImage,e[n].firstName,e[n].lastName,e[n].guestNumber,new Date(e[n].bookedFrom),new Date(e[n].bookedTo)));return t})),Object(l.a)((function(t){e._bookings.next(t)})))}},{key:"bookings",get:function(){return this._bookings.asObservable()}}]),e}()).\u0275fac=function(e){return new(e||r)(f.Ob(d.a),f.Ob(p.a))},r.\u0275prov=f.Db({token:r,factory:r.\u0275fac,providedIn:"root"}),r)},g1t5:function(e,t,n){"use strict";n.r(t),n.d(t,"PlaceDetailPageModule",(function(){return O}));var r,a=n("ofXK"),c=n("3Pt+"),s=n("TEn/"),l=n("tyNb"),u=n("IzEk"),b=n("eIep"),f=n("fXoL"),d=["f"],p=((r=function(){function e(t){o(this,e),this.modalCtrl=t}return i(e,[{key:"ngOnInit",value:function(){var e=new Date(this.selectedPlace.availableFrom),t=new Date(this.selectedPlace.availableTo);"random"===this.selectedMode&&(this.startDate=new Date(e.getTime()+Math.random()*(t.getTime()-6048e5-e.getTime())).toISOString(),this.endDate=new Date(new Date(this.startDate).getTime()+Math.random()*(new Date(this.startDate).getTime()+5184e5-new Date(this.startDate).getTime())).toISOString())}},{key:"onCancel",value:function(){this.modalCtrl.dismiss(null,"cancel")}},{key:"onBookPlace",value:function(){this.form.valid&&this.datesValid&&this.modalCtrl.dismiss({bookingData:{firstName:this.form.value["first-name"],lastName:this.form.value["last-name"],guestNumber:+this.form.value["guest-number"],startDate:new Date(this.form.value["date-from"]),endDate:new Date(this.form.value["date-to"])}},"confirm")}},{key:"datesValid",value:function(){var e=new Date(this.form.value["date-from"]);return new Date(this.form.value["date-to"])>e}}]),e}()).\u0275fac=function(e){return new(e||r)(f.Hb(s.X))},r.\u0275cmp=f.Bb({type:r,selectors:[["app-create-booking"]],viewQuery:function(e,t){var n;1&e&&f.gc(d,!0),2&e&&f.bc(n=f.Tb())&&(t.form=n.first)},inputs:{selectedPlace:"selectedPlace",selectedMode:"selectedMode"},decls:51,vars:9,consts:[["slot","primary",3,"click"],["name","close"],[1,"ion-text-center","padding"],[3,"ngSubmit"],["f","ngForm"],["size-sm","6","offset-sm","3"],["position","floating"],["type","text","ngModel","","name","first-name","required",""],["type","text","ngModel","","name","last-name","required",""],["name","guest-number",3,"ngModel"],["value","1"],["value","2"],["value","3"],["size-sm","3","offset-sm","3"],["display-format","MMM DD YYYY","picker-format","YY MMM DD","name","date-from","required","",3,"min","max","ngModel"],["startDateCtrl","ngModel"],["size-sm","3"],["display-format","MMM DD YYYY","picker-format","YY MMM DD","name","date-to","required","",3,"min","max","ngModel"],["color","primary","type","submit","expand","block",3,"disabled"]],template:function(e,t){if(1&e&&(f.Kb(0,"ion-header"),f.Kb(1,"ion-toolbar"),f.Kb(2,"ion-title"),f.ic(3),f.Jb(),f.Kb(4,"ion-buttons",0),f.Sb("click",(function(){return t.onCancel()})),f.Kb(5,"ion-button"),f.Ib(6,"ion-icon",1),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Kb(7,"ion-content",2),f.Kb(8,"form",3,4),f.Sb("ngSubmit",(function(){return t.onBookPlace()})),f.Kb(10,"ion-grid"),f.Kb(11,"ion-row"),f.Kb(12,"ion-col",5),f.Kb(13,"ion-item"),f.Kb(14,"ion-label",6),f.ic(15," First Name "),f.Jb(),f.Ib(16,"ion-input",7),f.Jb(),f.Jb(),f.Jb(),f.Kb(17,"ion-row"),f.Kb(18,"ion-col",5),f.Kb(19,"ion-item"),f.Kb(20,"ion-label",6),f.ic(21," Last Name "),f.Jb(),f.Ib(22,"ion-input",8),f.Jb(),f.Jb(),f.Jb(),f.Kb(23,"ion-row"),f.Kb(24,"ion-col",5),f.Kb(25,"ion-item"),f.Kb(26,"ion-label",6),f.ic(27," Number of guests "),f.Jb(),f.Kb(28,"ion-select",9),f.Kb(29,"ion-select-option",10),f.ic(30," 1 "),f.Jb(),f.Kb(31,"ion-select-option",11),f.ic(32," 2 "),f.Jb(),f.Kb(33,"ion-select-option",12),f.ic(34," 3 "),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Kb(35,"ion-row"),f.Kb(36,"ion-col",13),f.Kb(37,"ion-item"),f.Kb(38,"ion-label",6),f.ic(39," From "),f.Jb(),f.Ib(40,"ion-datetime",14,15),f.Jb(),f.Jb(),f.Kb(42,"ion-col",16),f.Kb(43,"ion-item"),f.Kb(44,"ion-label",6),f.ic(45," To "),f.Jb(),f.Ib(46,"ion-datetime",17),f.Jb(),f.Jb(),f.Jb(),f.Kb(47,"ion-row"),f.Kb(48,"ion-col",13),f.Kb(49,"ion-button",18),f.ic(50,"Book!"),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Jb()),2&e){var n=f.cc(9),i=f.cc(41);f.xb(3),f.jc(t.selectedPlace.title),f.xb(25),f.Zb("ngModel","2"),f.xb(12),f.Zb("min",t.selectedPlace.availableFrom.toISOString())("max",t.selectedPlace.availableTo.toISOString())("ngModel",t.startDate),f.xb(6),f.Zb("min",i.value)("max",t.selectedPlace.availableTo.toISOString())("ngModel",t.endDate),f.xb(3),f.Zb("disabled",!n.valid||!t.datesValid())}},directives:[s.r,s.R,s.Q,s.h,s.g,s.s,s.o,c.q,c.k,c.l,s.q,s.F,s.n,s.v,s.z,s.u,s.db,c.j,c.m,c.o,s.I,s.cb,s.J,s.p],styles:[""]}),r),m=n("Qe3P"),h=n("VFTF"),g=n("qXBG");function v(e,t){if(1&e){var n=f.Lb();f.Kb(0,"ion-row"),f.Kb(1,"ion-col",9),f.Kb(2,"ion-button",10),f.Sb("click",(function(){return f.dc(n),f.Ub(2).onBookPlace()})),f.ic(3," Book "),f.Jb(),f.Jb(),f.Jb()}}function y(e,t){if(1&e&&(f.Kb(0,"ion-grid",4),f.Kb(1,"ion-row"),f.Kb(2,"ion-col",5),f.Ib(3,"ion-img",6),f.Jb(),f.Jb(),f.Kb(4,"ion-row"),f.Kb(5,"ion-col",7),f.Kb(6,"p"),f.ic(7),f.Jb(),f.Jb(),f.Jb(),f.hc(8,v,4,0,"ion-row",8),f.Jb()),2&e){var n=f.Ub();f.xb(3),f.Zb("src",n.place.imageUrl),f.xb(4),f.jc(n.place.description),f.xb(1),f.Zb("ngIf",n.isBookable)}}var k,w,J,K=[{path:"",component:(k=function(){function e(t,n,i,r,a,c,s,l,u,b){o(this,e),this.activatedRoute=t,this.navCtrl=n,this.modalCtrl=i,this.placesService=r,this.actionSheetCtrl=a,this.bookingService=c,this.loadingCtrl=s,this.authService=l,this.alertCtrl=u,this.router=b}return i(e,[{key:"ngOnInit",value:function(){var e=this;this.activatedRoute.paramMap.subscribe((function(t){var n;t.has("placeId")?(e.isLoading=!0,e.authService.userId.pipe(Object(u.a)(1),Object(b.a)((function(i){if(!i)throw new Error("Found no user!");return e.loadingCtrl.create({message:"Loading..."}).then((function(e){e.present(),e.dismiss()})),n=i,e.placesService.getPlace(t.get("placeId"))}))).subscribe((function(t){e.place=t,e.isBookable=t.userId!==n,e.isLoading=!1}),(function(t){e.isLoading=!1,e.alertCtrl.create({header:"An error occured",message:"Could not load place!",buttons:[{text:"okay",handler:function(){e.router.navigate(["/places/tabs/discover"])}}]}).then((function(e){e.present()}))}))):e.navCtrl.navigateBack("/places/tabs/discover")}))}},{key:"onBookPlace",value:function(){var e=this;this.actionSheetCtrl.create({header:"Choose an action",buttons:[{text:"Select Date",handler:function(){e.openBookingModal("select")}},{text:" Random date",handler:function(){e.openBookingModal("random")}},{text:"Cancel",role:"destructive"}]}).then((function(e){e.present()}))}},{key:"openBookingModal",value:function(e){var t=this;console.log(e),this.modalCtrl.create({component:p,componentProps:{selectedPlace:this.place,selectedMode:e}}).then((function(e){return e.present(),e.onDidDismiss()})).then((function(e){console.log(e.data,e.role),"confirm"===e.role&&t.loadingCtrl.create({message:"Booking Place..."}).then((function(n){n.present();var i=e.data.bookingData;t.bookingService.addBooking(t.place.id,t.place.title,t.place.imageUrl,i.firstName,i.lastName,i.guestNumber,i.startDate,i.endDate).subscribe((function(){n.dismiss()}))}))}))}},{key:"ngOnDestroy",value:function(){this.placeSub&&this.placeSub.unsubscribe()}}]),e}(),k.\u0275fac=function(e){return new(e||k)(f.Hb(l.a),f.Hb(s.Y),f.Hb(s.X),f.Hb(m.a),f.Hb(s.a),f.Hb(h.a),f.Hb(s.V),f.Hb(g.a),f.Hb(s.b),f.Hb(l.g))},k.\u0275cmp=f.Bb({type:k,selectors:[["app-place-detail"]],decls:8,vars:2,consts:[["color","primary"],["slot","start"],["defaultHref","/places/tabs/discover"],["class","ion-no-padding",4,"ngIf"],[1,"ion-no-padding"],["size-sm","6","offset-sm","3"],[3,"src"],["size-sm","6","offset-sm","3",1,"ion-text-center","ion-padding"],[4,"ngIf"],["size-sm","6","offset-sm","3",1,"ion-text-center"],["color","primary",1,"ion-margin",3,"click"]],template:function(e,t){1&e&&(f.Kb(0,"ion-header"),f.Kb(1,"ion-toolbar",0),f.Kb(2,"ion-buttons",1),f.Ib(3,"ion-back-button",2),f.Jb(),f.Kb(4,"ion-title"),f.ic(5),f.Jb(),f.Jb(),f.Jb(),f.Kb(6,"ion-content"),f.hc(7,y,9,3,"ion-grid",3),f.Jb()),2&e&&(f.xb(5),f.jc(t.isLoading?"Loading...":t.place.title),f.xb(2),f.Zb("ngIf",!t.isLoading))},directives:[s.r,s.R,s.h,s.e,s.f,s.Q,s.o,a.k,s.q,s.F,s.n,s.t,s.g],styles:[".location-image[_ngcontent-%COMP%]{width:100%;height:25rem;max-height:30vh;-o-object-fit:cover;object-fit:cover}p[_ngcontent-%COMP%]{margin:0}"]}),k)}],I=((J=function e(){o(this,e)}).\u0275mod=f.Fb({type:J}),J.\u0275inj=f.Eb({factory:function(e){return new(e||J)},imports:[[l.i.forChild(K)],l.i]}),J),O=((w=function e(){o(this,e)}).\u0275mod=f.Fb({type:w}),w.\u0275inj=f.Eb({factory:function(e){return new(e||w)},imports:[[a.b,c.f,s.T,I]]}),w)},sPtc:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s}));var i=function(e,t){return null!==t.closest(e)},o=function(e,t){return"string"==typeof e&&e.length>0?Object.assign((o=!0,(i="ion-color-"+e)in(n={"ion-color":!0})?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n),t):t;var n,i,o},r=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},c=/^[a-z][a-z0-9+\-.]*:/,s=function(){var e=a(regeneratorRuntime.mark((function e(t,n,i,o){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t||"#"===t[0]||c.test(t)){e.next=4;break}if(!(r=document.querySelector("ion-router"))){e.next=4;break}return e.abrupt("return",(null!=n&&n.preventDefault(),r.push(t,i,o)));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(t,n,i,o){return e.apply(this,arguments)}}()},"vm+t":function(e,t,n){"use strict";n.r(t),n.d(t,"EditOfferPageModule",(function(){return v}));var r=n("ofXK"),a=n("3Pt+"),c=n("TEn/"),s=n("tyNb"),l=n("fXoL"),u=n("Qe3P");function b(e,t){1&e&&(l.Kb(0,"ion-row"),l.Kb(1,"ion-col",9),l.Kb(2,"p"),l.ic(3,"Description must be between 1 and 180 characters."),l.Jb(),l.Jb(),l.Jb())}function f(e,t){if(1&e&&(l.Kb(0,"form",8),l.Kb(1,"ion-grid"),l.Kb(2,"ion-row"),l.Kb(3,"ion-col",9),l.Kb(4,"ion-item"),l.Kb(5,"ion-label",10),l.ic(6," Title "),l.Jb(),l.Ib(7,"ion-input",11),l.Jb(),l.Jb(),l.Jb(),l.Kb(8,"ion-row"),l.Kb(9,"ion-col",9),l.Kb(10,"ion-item"),l.Kb(11,"ion-label",10),l.ic(12," Short Description "),l.Jb(),l.Ib(13,"ion-textarea",12),l.Jb(),l.Jb(),l.Jb(),l.hc(14,b,4,0,"ion-row",13),l.Jb(),l.Jb()),2&e){var n=l.Ub();l.Zb("formGroup",n.form),l.xb(14),l.Zb("ngIf",!n.form.get("description").valid&&n.form.get("description").touched)}}var d,p,m,h=[{path:"",component:(d=function(){function e(t,n,i,r,a,c){o(this,e),this.activatedRoute=t,this.navCtrl=n,this.placesService=i,this.router=r,this.loadingCtrl=a,this.alertCtrl=c}return i(e,[{key:"ngOnInit",value:function(){var e=this;this.activatedRoute.paramMap.subscribe((function(t){t.has("placeId")?(e.placeId=t.get("placeId"),e.isLoading=!0,e.loadingCtrl.create({message:"Loading..."}).then((function(n){n.present(),e.placeSub=e.placesService.getPlace(t.get("placeId")).subscribe((function(t){e.place=t,e.form=new a.d({title:new a.b(e.place.title,{updateOn:"blur",validators:[a.p.required]}),description:new a.b(e.place.description,{updateOn:"blur",validators:[a.p.required,a.p.maxLength(180)]})}),e.isLoading=!1,n.dismiss()}),(function(t){e.alertCtrl.create({header:"error occured",message:"Place could not be fetched. Please try again later...",buttons:[{text:"okay",handler:function(){e.router.navigate(["/places/tabs/offers"])}}]}).then((function(e){n.dismiss(),e.present()}))}))}))):e.navCtrl.navigateBack("/places/tabs/offers")}))}},{key:"onUpdateOffer",value:function(){var e=this;this.form.valid&&this.loadingCtrl.create({message:"Updating Place...."}).then((function(t){t.present(),e.placesService.updatePlace(e.place.id,e.form.value.title,e.form.value.description).subscribe((function(){t.dismiss(),e.form.reset(),e.router.navigate(["/places/tabs/offers"])}))}))}},{key:"ngOnDestroy",value:function(){this.placeSub&&this.placeSub.unsubscribe()}}]),e}(),d.\u0275fac=function(e){return new(e||d)(l.Hb(s.a),l.Hb(c.Y),l.Hb(u.a),l.Hb(s.g),l.Hb(c.V),l.Hb(c.b))},d.\u0275cmp=l.Bb({type:d,selectors:[["app-edit-offer"]],decls:11,vars:3,consts:[["color","primary"],["slot","start"],[3,"defaultHref"],["slot","primary"],[3,"disabled","click"],["name","checkmark","slot","icon-only"],[1,"ion-padding"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],["size-sm","6","offset-sm","3"],["position","floating"],["type","text","autocomplete","off","autocorrect","","formControlName","title"],["rows","3","formControlName","description"],[4,"ngIf"]],template:function(e,t){1&e&&(l.Kb(0,"ion-header"),l.Kb(1,"ion-toolbar",0),l.Kb(2,"ion-buttons",1),l.Ib(3,"ion-back-button",2),l.Jb(),l.Kb(4,"ion-title"),l.ic(5,"Edit Offer"),l.Jb(),l.Kb(6,"ion-buttons",3),l.Kb(7,"ion-button",4),l.Sb("click",(function(){return t.onUpdateOffer()})),l.Ib(8,"ion-icon",5),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(9,"ion-content",6),l.hc(10,f,15,2,"form",7),l.Jb()),2&e&&(l.xb(3),l.Zb("defaultHref","/places/tabs/offers/"+t.placeId),l.xb(4),l.Zb("disabled",!(null!=t.form&&t.form.valid)),l.xb(3),l.Zb("ngIf",!t.isLoading))},directives:[c.r,c.R,c.h,c.e,c.f,c.Q,c.g,c.s,c.o,r.k,a.q,a.k,a.e,c.q,c.F,c.n,c.v,c.z,c.u,c.db,a.j,a.c,c.O],styles:[""]}),d)}],g=((m=function e(){o(this,e)}).\u0275mod=l.Fb({type:m}),m.\u0275inj=l.Eb({factory:function(e){return new(e||m)},imports:[[s.i.forChild(h)],s.i]}),m),v=((p=function e(){o(this,e)}).\u0275mod=l.Fb({type:p}),p.\u0275inj=l.Eb({factory:function(e){return new(e||p)},imports:[[r.b,a.n,c.T,g]]}),p)},wmmW:function(e,t,n){"use strict";n.r(t),n.d(t,"NewOfferPageModule",(function(){return P}));var r=n("ofXK"),a=n("3Pt+"),c=n("TEn/"),s=n("tyNb"),l=n("fXoL"),u=n("Qe3P"),b=n("gcOT"),f=["filePicker"];function d(e,t){if(1&e){var n=l.Lb();l.Kb(0,"ion-img",4),l.Sb("click",(function(){return l.dc(n),l.Ub().onPickImage()})),l.Jb()}if(2&e){var i=l.Ub();l.Zb("src",i.selectedImage)}}function p(e,t){if(1&e){var n=l.Lb();l.Kb(0,"ion-button",5),l.Sb("click",(function(){return l.dc(n),l.Ub().onPickImage()})),l.Ib(1,"ion-icon",6),l.Kb(2,"ion-label"),l.ic(3,"Take picture"),l.Jb(),l.Jb()}}function m(e,t){if(1&e){var n=l.Lb();l.Kb(0,"input",7,8),l.Sb("change",(function(e){return l.dc(n),l.Ub().onFileChosen(e)})),l.Jb()}}var h,g=((h=function(){function e(t){o(this,e),this.platform=t,this.imagePick=new l.n,this.showPreview=!1,this.usePicker=!1}return i(e,[{key:"ngOnInit",value:function(){console.log("Mobile",this.platform.is("mobile")),console.log("hybrid",this.platform.is("hybrid")),console.log("ios",this.platform.is("ios")),console.log("android",this.platform.is("android")),console.log("desktop",this.platform.is("desktop")),(this.platform.is("mobile")&&!this.platform.is("hybrid")||this.platform.is("desktop"))&&(this.usePicker=!0)}},{key:"onPickImage",value:function(){var e=this;b.c.isPluginAvailable("Camera")?b.d.Camera.getPhoto({quality:50,source:b.b.Prompt,correctOrientation:!0,height:320,width:200,resultType:b.a.DataUrl}).then((function(t){e.selectedImage=t.dataUrl,e.imagePick.emit(t.dataUrl)})).catch((function(t){return console.log(t),e.usePicker&&e.filePickerRef.nativeElement.click(),!1})):this.filePickerRef.nativeElement.click()}},{key:"onFileChosen",value:function(e){var t=this;console.log(e);var n=e.target.files[0];if(n){var i=new FileReader;i.onload=function(){var e=i.result.toString();t.selectedImage=e,t.imagePick.emit(n)},i.readAsDataURL(n)}}}]),e}()).\u0275fac=function(e){return new(e||h)(l.Hb(c.ab))},h.\u0275cmp=l.Bb({type:h,selectors:[["app-image-picker"]],viewQuery:function(e,t){var n;1&e&&l.lc(f,!0),2&e&&l.bc(n=l.Tb())&&(t.filePickerRef=n.first)},inputs:{showPreview:"showPreview"},outputs:{imagePick:"imagePick"},decls:4,vars:3,consts:[[1,"picker"],["role","button","class","image",3,"src","click",4,"ngIf"],["color","primary",3,"click",4,"ngIf"],["type","file","accept","image/jpeg",3,"change",4,"ngIf"],["role","button",1,"image",3,"src","click"],["color","primary",3,"click"],["name","camera","slot","start"],["type","file","accept","image/jpeg",3,"change"],["filePicker",""]],template:function(e,t){1&e&&(l.Kb(0,"div",0),l.hc(1,d,1,1,"ion-img",1),l.hc(2,p,4,0,"ion-button",2),l.Jb(),l.hc(3,m,2,0,"input",3)),2&e&&(l.xb(1),l.Zb("ngIf",t.selectedImage&&t.showPreview),l.xb(1),l.Zb("ngIf",!t.selectedImage||!t.showPreview),l.xb(1),l.Zb("ngIf",t.usePicker))},directives:[r.k,c.t,c.g,c.s,c.z],styles:[".picker[_ngcontent-%COMP%]{width:30rem;max-width:80%;height:20rem;max-height:30vh;border:1px solid var(--ion-color-primary);margin:auto;display:flex;justify-content:center;align-items:center}.image[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}input[type=file][_ngcontent-%COMP%]{display:none}"]}),h);function v(e,t){1&e&&(l.Kb(0,"ion-row"),l.Kb(1,"ion-col",7),l.Kb(2,"p"),l.ic(3,"Description must be between 1 and 180 characters."),l.Jb(),l.Jb(),l.Jb())}var y,k,w,J,K=[{path:"",component:(y=function(){function e(t,n,i){o(this,e),this.placesService=t,this.router=n,this.loadingCtrl=i}return i(e,[{key:"ngOnInit",value:function(){this.form=new a.d({title:new a.b("",{updateOn:"blur",validators:[a.p.required]}),description:new a.b("",{updateOn:"blur",validators:[a.p.required,a.p.maxLength(180)]}),price:new a.b("",{updateOn:"blur",validators:[a.p.required,a.p.min(1)]}),dateFrom:new a.b("",{updateOn:"blur",validators:[a.p.required]}),dateTo:new a.b("",{updateOn:"blur",validators:[a.p.required]}),image:new a.b(null)})}},{key:"onCreateOffer",value:function(){var e=this;this.form.valid&&this.form.get("image").value&&(console.log(this.form.value),this.loadingCtrl.create({message:"Creating Place..."}).then((function(t){t.present(),e.placesService.addPlace(e.form.value.title,e.form.value.description,+e.form.value.price,new Date(e.form.value.dateFrom),new Date(e.form.value.dateTo),e.form.value.imageFile).subscribe((function(){t.dismiss(),e.form.reset(),e.router.navigate(["/places/tabs/offers"])}))})))}},{key:"onLocationPicked",value:function(e){this.form.patchValue({location:e})}},{key:"onImagePicked",value:function(e){var t;if("string"==typeof e)try{t=function(e,t){t=t||"";for(var n=window.atob(e),i=n.length,o=Math.ceil(i/1024),r=new Array(o),a=0;a<o;++a){for(var c=1024*a,s=Math.min(c+1024,i),l=new Array(s-c),u=c,b=0;u<s;++b,++u)l[b]=n[u].charCodeAt(0);r[a]=new Uint8Array(l)}return new Blob(r,{type:t})}(e.replace("data:image/jpeg;base64,",""),"image/jpeg")}catch(n){return void console.log(n)}else t=e;this.form.patchValue({image:t})}}]),e}(),y.\u0275fac=function(e){return new(e||y)(l.Hb(u.a),l.Hb(s.g),l.Hb(c.V))},y.\u0275cmp=l.Bb({type:y,selectors:[["app-new-offer"]],decls:45,vars:4,consts:[["color","primary"],["slot","start"],["defaultHref","/places/tabs/offers"],["slot","primary"],[3,"disabled","click"],["name","checkmark","slot","icon-only"],[3,"formGroup"],["size-sm","6","offset-sm","3"],["position","floating"],["type","text","autocomplete","off","autocorrect","","formControlName","title"],["rows","3","formControlName","description"],[4,"ngIf"],["type","number","formControlName","price"],["size-sm","3","offset-sm","3"],["min","2019-01-01","max","2025-12-31","formControlName","dateFrom"],["size-sm","3"],["min","2019-01-02","max","2025-12-31","formControlName","dateTo"],[3,"showPreview","imagePick"]],template:function(e,t){1&e&&(l.Kb(0,"ion-header"),l.Kb(1,"ion-toolbar",0),l.Kb(2,"ion-buttons",1),l.Ib(3,"ion-back-button",2),l.Jb(),l.Kb(4,"ion-title"),l.ic(5,"New Offer"),l.Jb(),l.Kb(6,"ion-buttons",3),l.Kb(7,"ion-button",4),l.Sb("click",(function(){return t.onCreateOffer()})),l.Ib(8,"ion-icon",5),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(9,"ion-content"),l.Kb(10,"form",6),l.Kb(11,"ion-grid"),l.Kb(12,"ion-row"),l.Kb(13,"ion-col",7),l.Kb(14,"ion-item"),l.Kb(15,"ion-label",8),l.ic(16," Title "),l.Jb(),l.Ib(17,"ion-input",9),l.Jb(),l.Jb(),l.Jb(),l.Kb(18,"ion-row"),l.Kb(19,"ion-col",7),l.Kb(20,"ion-item"),l.Kb(21,"ion-label",8),l.ic(22," Short Description "),l.Jb(),l.Ib(23,"ion-textarea",10),l.Jb(),l.Jb(),l.Jb(),l.hc(24,v,4,0,"ion-row",11),l.Kb(25,"ion-row"),l.Kb(26,"ion-col",7),l.Kb(27,"ion-item"),l.Kb(28,"ion-label",8),l.ic(29," Price "),l.Jb(),l.Ib(30,"ion-input",12),l.Jb(),l.Jb(),l.Jb(),l.Kb(31,"ion-row"),l.Kb(32,"ion-col",13),l.Kb(33,"ion-item"),l.Kb(34,"ion-label",8),l.ic(35," Available from "),l.Jb(),l.Ib(36,"ion-datetime",14),l.Jb(),l.Jb(),l.Kb(37,"ion-col",15),l.Kb(38,"ion-item"),l.Kb(39,"ion-label",8),l.ic(40," Available to "),l.Jb(),l.Ib(41,"ion-datetime",16),l.Jb(),l.Jb(),l.Jb(),l.Kb(42,"ion-row"),l.Kb(43,"ion-col",7),l.Kb(44,"app-image-picker",17),l.Sb("imagePick",(function(e){return t.onImagePicked(e)})),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&e&&(l.xb(7),l.Zb("disabled",!t.form.valid||!t.form.get("image").value),l.xb(3),l.Zb("formGroup",t.form),l.xb(14),l.Zb("ngIf",!t.form.get("description").valid&&t.form.get("description").touched),l.xb(20),l.Zb("showPreview",t.form.get("image").value))},directives:[c.r,c.R,c.h,c.e,c.f,c.Q,c.g,c.s,c.o,a.q,a.k,a.e,c.q,c.F,c.n,c.v,c.z,c.u,c.db,a.j,a.c,c.O,r.k,c.Z,c.p,c.cb,g],styles:[""]}),y)}],I=((J=function e(){o(this,e)}).\u0275mod=l.Fb({type:J}),J.\u0275inj=l.Eb({factory:function(e){return new(e||J)},imports:[[s.i.forChild(K)],s.i]}),J),O=((w=function e(){o(this,e)}).\u0275mod=l.Fb({type:w}),w.\u0275inj=l.Eb({factory:function(e){return new(e||w)},imports:[[r.b,c.T]]}),w),P=((k=function e(){o(this,e)}).\u0275mod=l.Fb({type:k}),k.\u0275inj=l.Eb({factory:function(e){return new(e||k)},imports:[[r.b,a.n,c.T,I,O]]}),k)}}])}();