import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from "../../environments/environment"
import { User } from './user.model';
import { Plugins, Capacitor } from "@capacitor/core"
import { Router } from '@angular/router';

export interface AuthResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken : string;
  localId : string;
  expiresIn : string;
  registered? : boolean;
}
@Injectable({
  providedIn: "root",
})
export class AuthService implements OnDestroy {
  private _user = new BehaviorSubject<User>(null);
  private activeLogoutTimer : any;
  

  constructor(private http: HttpClient, private router: Router) {}

  autoLogin(){
    return from(Plugins.Storage.get({
      key: 'authData'
    })) /// to convert promise to observables from operator is used
    .pipe(map(storedData=>{
      console.log(storedData)
      if(!storedData || !storedData.value){
        return null;
      }
      const parsedData = JSON.parse(storedData.value) as {token: string; tokenExpirationData: string; userId : string; email: string};
      const expirationTime = new Date(parsedData.tokenExpirationData);
      if(expirationTime<= new Date()){
        return null;
      }
      const user = new User(parsedData.userId, parsedData.email, parsedData.token, expirationTime);
      return user;
    }), tap(user=>{
      if(user){
        this._user.next(user);
        this.autoLogout(user.tokenDuration);
      }
    }), map(user=>{
      return !!user;
    }))
  }

  get userIsAuthenticated() {
    return this._user.asObservable().pipe(map(user=>{
      if(user){
        return !!user.token
      }
   
    }))
  }

  get userId() {
    return this._user.asObservable().pipe(map(user=>{
      if(user){
        return user.id
      }
      else{
        return null;
      }
     
    }));
  }

  login(email: string, password: string) {
  return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`,{
      email : email, password : password, returnSecureToken: true
    })
    .pipe(tap(this.setUserData.bind(this)))
    // this._userIsAuthenticated = true;
  }

  logout() {
    if(this.activeLogoutTimer){
      clearTimeout(this.activeLogoutTimer);
    }
    this._user.next(null);
    Plugins.Storage.remove({key:"authData"})
    this.router.navigateByUrl('/auth');
  }

  signUp(email: string, password: string){
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseApiKey}`, {email : email, password : password, returnSecureToken: true})
    .pipe(tap(this.setUserData.bind(this)))
  }

  private setUserData(userData : AuthResponseData){
      const expirationTime = new Date(new Date().getTime() + +userData.expiresIn *1000);
    const user =  new User(userData.localId, userData.email, userData.idToken, expirationTime)
    this._user.next(user);
 
      this.autoLogout(user.tokenDuration);
      this.storeAuthData(userData.localId, userData.idToken, expirationTime.toISOString(), userData.email)
     
    }

    private storeAuthData(userId: string, token: string, tokenExpirationDate: string, email: string){
      const data =  JSON.stringify({
        userId: userId, token: token, tokenExpirationDate: tokenExpirationDate, email: email
      });
      Plugins.Storage.set({key: "authData", value:data})
    }

    private autoLogout(duration: number){
      if(this.activeLogoutTimer){
        clearTimeout(this.activeLogoutTimer);
      }
     this.activeLogoutTimer = setTimeout(()=>{
        this.logout();
      }, duration)
    }

    ngOnDestroy(){
      if(this.activeLogoutTimer){
        clearTimeout(this.activeLogoutTimer)
      }
    }
}
