import { Component, OnInit } from '@angular/core';
import { ProgressbarService } from 'src/app/shared/services/progressbar.service';
import { AlertService } from 'ngx-alerts';
import { AuthService } from '../resources/auth.service';
import { Routes, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styles: [
  ]
})
export class ForgotpasswordComponent implements OnInit {

  model: any = {
    email: null
    //claim: 'Developer',
  };
  constructor(
    private progressService: ProgressbarService,
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    this.alertService.info('Generate Reset Password Email..');
    this.progressService.startLoading();

    const forgotpasswordObserver = {
      next: (x: any) => {
        this.progressService.setSuccess();
        this.alertService.success('Yup, email is sent');
        this.progressService.completeLoading();
        this.router.navigate(['/forgotpasswordcheckemail']);
      },
      error: (err: any) => {
        this.progressService.setFailure();
        this.alertService.danger(err.error.errors[0].description);
        this.progressService.completeLoading();
      },
    };

    this.authService.retoredpassword(this.model).subscribe(forgotpasswordObserver);


  }
}
