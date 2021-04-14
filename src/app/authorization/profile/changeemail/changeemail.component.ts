import { Component, OnInit } from '@angular/core';
import { ProgressbarService } from 'src/app/shared/services/progressbar.service';
import { AlertService } from 'ngx-alerts';
import { AuthService } from 'src/app/authorization/resources/auth.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-changeemail',
  templateUrl: './changeemail.component.html',
  styles: [
  ]
})
export class ChangeemailComponent implements OnInit {
  
  email:any;
  getmodel: any = {
    userid:null,
  };
  postmodel: any = {
    userId:null,
    newEmail:null
  };
  

  constructor(private route: ActivatedRoute,
    private progressService: ProgressbarService,
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router) {
      if (!authService.isLoggedIn) {
        router.navigate(['/']);
      }
     }

  ngOnInit(): void {
    this.getuserinformation();
  }
  getuserinformation(){
    this.getmodel.userid = localStorage.getItem('userid');
    const getinforObserver = {
      next: (x: any) => {
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
    this.postmodel.userId = localStorage.getItem('userid');
    this.alertService.info('Check login information');
    this.progressService.startLoading();

    const changeemailObserver = {
      next: (x: any) => {
        this.progressService.setSuccess();
        this.alertService.success('Change Email Successfully');
        this.progressService.completeLoading();
        this.router.navigate(['/account/changeemailsuccesss']);
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
      },
      error: (err: any) => {
        console.log(err);
        this.alertService.danger(err.error);
        this.progressService.completeLoading();
      },
    };


    this.authService.changeemail(this.postmodel).subscribe(changeemailObserver);
  }
}
