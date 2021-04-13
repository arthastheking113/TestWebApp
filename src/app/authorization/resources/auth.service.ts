import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { IUser } from './IUser';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ProgressbarService } from 'src/app/shared/services/progressbar.service';
import { AlertService } from 'ngx-alerts';
import { Routes, RouterModule, Router } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/AppComponent', pathMatch: 'full' },
  { path: 'contact',  redirectTo: '/contact' },

];

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  baseUrl: string = environment.baseUrl;
  isLoggedIn:boolean;
  helper = new JwtHelperService();

  currentUser: IUser = {
    firstName:'',
    lastName:'',
    email: '',
    role: '',
    jobtitle: '',
  };
  
  constructor(public http: HttpClient,
    private progressService: ProgressbarService,
    private alertService: AlertService,
    private router: Router) {}

  login(model: any): Observable<IUser> {
    return this.http.post(this.baseUrl + 'Identity/login', model).pipe(
      map((response: any) => {
        const decodedToken = this.helper.decodeToken(response.token);
        this.isLoggedIn = response.result.succeeded;
        this.currentUser.firstName = response.firstName;
        this.currentUser.lastName = response.lastName;
        this.currentUser.email = decodedToken.email;
        this.currentUser.jobtitle = decodedToken.JobTitle;
        this.currentUser.role = decodedToken.role;

        localStorage.setItem('token', response.token);
        localStorage.setItem('userid', response.userid);
        this.router.navigate(['/contact']);
        return this.currentUser;
      })
    );
  }

  retoredpassword(model: any){
   
    return this.http.post(this.baseUrl + 'Identity/forgotpassword', model)
    .pipe(
      map((response: any) => {
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        localStorage.setItem('token', response.token);
        localStorage.setItem('userid', response.userid);
      }));
  }

  resetpassword(model: any) {
    return this.http.post(this.baseUrl + 'Identity/resetpassword', model);
  }

  loggedIn(): boolean {
    const token: any = localStorage.getItem('token');
    return !this.helper.isTokenExpired(token);
  }
  isLogined(): boolean {
    return this.isLoggedIn ? true : false;
  }
  logout() {
    this.currentUser = {
      firstName:'',
      lastName:'',
      email: '',
      role: '',
      jobtitle: '',
    };
    this.isLoggedIn = false;
    this.progressService.setSuccess();
    this.alertService.success('Log out successfully!');
    this.progressService.completeLoading();
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    this.router.navigate(['']);
  }
  
  resendemailconfirmation(model: any) {
    return this.http.post(this.baseUrl + 'Identity/resentemailconfirmation', model);
  }
  register(model: any) {
    return this.http.post(this.baseUrl + 'Identity/register', model);
  }

  confirmEmail(model: any) {
    return this.http.post(this.baseUrl + 'Identity/confirmemail', model);
  }
  getuserinformation(model: any) {
    return this.http.post(this.baseUrl + 'Identity/getinfor', model);
  }
  
  changeemail(model: any) {
    return this.http.post(this.baseUrl + 'Identity/changeemail', model);
  }

}
