import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient,private route:Router) { }

  private url = "http://localhost:8081/user";

  addData(user: User) {
    return this.http.post(this.url, user);
  }

  getData() {
    return this.http.get(this.url);
  }

  getById(id: any) {
    return this.http.get(this.url + "/", id);
  }

  login(user: any) {
    return this.http.post(this.url + "/login", user);
  }

  public saveUser(allData: any): void {
    window.sessionStorage.setItem("auth-user", JSON.stringify(allData));
  }
  users!: User
  public getUser(): any {
    const user = window.sessionStorage.getItem("auth-user");
    if (user) {
      const userData = JSON.parse(user);
      return userData;
    }
    return {};
  }

  loggedIn(){
    const user = window.sessionStorage.getItem("auth-user");
    if (user==null) {
      this.route.navigateByUrl("/login")
    } 
  }

  logOut(){
    window.sessionStorage.removeItem("auth-user");
  }
}
