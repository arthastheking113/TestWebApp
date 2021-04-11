import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../resources/auth.service';
import { ProgressbarService } from 'src/app/shared/services/progressbar.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private progressService: ProgressbarService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.alertService.info('Check login information');
    this.progressService.startLoading();

    const loginObserver = {
      next: (x: any) => {
        this.progressService.setSuccess();
        this.alertService.success('Welcome back ' + x.firstName + ' '  + x.lastName);
        this.progressService.completeLoading();
      },
      error: (err: any) => {
        this.progressService.setFailure();
       
        console.log(err);
        this.alertService.danger(err.error);
        this.progressService.completeLoading();
      },
    };

    this.authService.login(form.value).subscribe(loginObserver);

  }
}
