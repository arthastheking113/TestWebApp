import { Component, OnInit } from '@angular/core';
import { ProgressbarService } from 'src/app/shared/services/progressbar.service';
import { AlertService } from 'ngx-alerts';
import { AuthService } from '../resources/auth.service';
import { Routes, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-resendemailconfirmation',
  templateUrl: './resendemailconfirmation.component.html',
  styles: [
  ]
})
export class ResendemailconfirmationComponent implements OnInit {

  model: any = {
    email: null
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

    const resendemailwordObserver = {
      next: (x: any) => {
        this.progressService.setSuccess();
        this.alertService.success('Yup, email is sent');
        this.progressService.completeLoading();
        this.router.navigate(['/resendemailconfirmationsuccess']);
      },
      error: (err: any) => {
        this.progressService.setFailure();
        this.alertService.danger(err.error.errors[0].description);
        this.progressService.completeLoading();
      },
    };

    this.authService.resendemailconfirmation(this.model).subscribe(resendemailwordObserver);


  }
}
