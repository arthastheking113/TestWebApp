import { Component, OnInit } from '@angular/core';
import { ProgressbarService } from 'src/app/shared/services/progressbar.service';
import { AlertService } from 'ngx-alerts';
import { AuthService } from 'src/app/authorization/resources/auth.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  
  getmodel: any = {
    userid:null,
  };
  submitmodel: any = {
    userId:null,
    firstName:null,
    lastName:null
  };

  firstNamee:string;
  lastNamee:string;
  email:string;
  constructor(
    private route: ActivatedRoute,
    private progressService: ProgressbarService,
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router
  ) {   if (!authService.isLoggedIn) {
    router.navigate(['/']);
  } }

  ngOnInit(): void {
    this.getuserinformation();
  }
  getuserinformation(){
    this.getmodel.userid = localStorage.getItem('userid');
    const getinforObserver = {
      next: (x: any) => {
        this.firstNamee = x.firstName;
        this.lastNamee = x.lastName;
        this.email = x.email;
       
      },
      error: (err: any) => {
        console.log(err);
        this.alertService.danger(err.error);

      },
    };
    this.authService.getuserinformation(this.getmodel).subscribe(getinforObserver);
  }

  onSubmit(){
    this.submitmodel.userId = localStorage.getItem('userid');
    this.alertService.info('Checking information');
    this.progressService.startLoading();

    const changeusernameObserver = {
      next: (x: any) => {
        this.progressService.setSuccess();
        this.alertService.success('Change Name Successfully');
        this.progressService.completeLoading();
        this.getuserinformation();
      },
      error: (err: any) => {
        console.log(err);
        this.alertService.danger(err.error);
        this.progressService.completeLoading();
      },
    };
    this.authService.changeusername(this.submitmodel).subscribe(changeusernameObserver);
  }

}
