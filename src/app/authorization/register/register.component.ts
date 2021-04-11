import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProgressbarService } from 'src/app/shared/services/progressbar.service';
import { AlertService } from 'ngx-alerts';
import { AuthService } from '../resources/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  roleOptions: string[] = ['Administrator', 'Manager'];
  developerType: string[] = ['Developer', 'Designer'];

  model: any = {
    firstName:null,
    lastName:null,
    email: null,
    password: null,
    confirmpassword:null
    //claim: 'Developer',
  };
  constructor(
    private progressService: ProgressbarService,
    private alertService: AlertService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.alertService.info('Creating new user');
    this.progressService.startLoading();
    if(this.model.password == this.model.confirmpassword){
      const registerObserver = {
        next: (x: any) => {
          this.progressService.setSuccess();
          this.alertService.success('Account Created');
          this.progressService.completeLoading();
        },
        error: (err: any) => {
          this.progressService.setFailure();
          this.alertService.danger(err.error.errors[0].description);
          this.progressService.completeLoading();
        },
      };
  
      this.authService.register(this.model).subscribe(registerObserver);
    }
    else{
      this.progressService.setFailure();
      this.alertService.danger('Password and confirm password not match');
      this.progressService.completeLoading();
    }
  
    
  }

  roleChange(value: any) {
    this.model.role = value;
  }

  claimChange(value: any) {
    this.model.claim = value;
  }
}
