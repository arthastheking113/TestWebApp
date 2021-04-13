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

  firstName:string;
  lastName:string;
  email:string;
  getmodel: any = {
    userid:null,
  };
  submitmodel: any = {
    userid:null,
  };
  constructor(
    private route: ActivatedRoute,
    private progressService: ProgressbarService,
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getuserinformation();
  }
  getuserinformation(){
    this.getmodel.userid = localStorage.getItem('userid');
    const getinforObserver = {
      next: (x: any) => {
        this.firstName = x.firstName;
        this.lastName = x.lastName;
        this.email = x.email;
       
      },
      error: (err: any) => {
        console.log(err);
        this.alertService.danger(err.error);

      },
    };
    this.authService.getuserinformation(this.getmodel).subscribe(getinforObserver);
  }
}
