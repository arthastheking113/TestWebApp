import { Component, OnInit } from '@angular/core';
import { ProgressbarService } from 'src/app/shared/services/progressbar.service';
import { AlertService } from 'ngx-alerts';
import { AuthService } from 'src/app/authorization/resources/auth.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styles: [
  ]
})
export class ChangepasswordComponent implements OnInit {
  
  postmodel: any = {
    userId:null,
    currentpassword:null,
    newpassword:null,
    confirmnewpassword:null
  };
  
  constructor(private route: ActivatedRoute,
    private progressService: ProgressbarService,
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router) {
      if (!authService.isLoggedIn) {
      router.navigate(['/']);
    }}

  ngOnInit(): void {
  }
  onSubmit(){
    this.alertService.info('Check Current Password');
    this.progressService.startLoading();
    if(this.postmodel.newpassword == this.postmodel.confirmnewpassword){
      this.postmodel.userId = localStorage.getItem('userid');

      const changepasswordObserver = {
        next: (x: any) => {
          this.progressService.setSuccess();
          this.alertService.success('Change Password Successfully');
          this.progressService.completeLoading();
          this.postmodel.reset;
          this.postmodel = new FormGroup({
            currentpassword: new FormControl(''),
            newpassword: new FormControl(''),
            confirmnewpassword: new FormControl(''),
        });
        },
        error: (err: any) => {
          console.log(err);
          this.alertService.danger(err.error);
          this.progressService.completeLoading();
        },
      };
      this.authService.changepassword(this.postmodel).subscribe(changepasswordObserver);
    }
    else{
          this.alertService.danger("Password and Confirm Password have to be matched");
          this.progressService.completeLoading();
    }
  }
}
