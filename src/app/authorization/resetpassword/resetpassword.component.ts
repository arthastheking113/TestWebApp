import { Component, OnInit } from '@angular/core';
import { ProgressbarService } from 'src/app/shared/services/progressbar.service';
import { AlertService } from 'ngx-alerts';
import { AuthService } from '../resources/auth.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styles: [
  ]
})
export class ResetpasswordComponent implements OnInit {

  token: string | any;
  model:any = {
    email: null,
    password: null,
    token:null,
    confirmpassword:null
  };
  constructor(
    private route: ActivatedRoute,
    private progressService: ProgressbarService,
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  getToken(){
    this.token = this.route.snapshot.queryParamMap.get('token');
 
  }

  onSubmit() {
    this.alertService.info('Reseting your password');
    this.progressService.startLoading();
    this.model.token = this.route.snapshot.queryParamMap.get('token');
    if(this.model.password == this.model.confirmpassword){
      const resetObserver = {
        next: (x: any) => {
          this.progressService.setSuccess();
          this.alertService.success('Your password successfully is reset');
          this.progressService.completeLoading();
          localStorage.removeItem('token');
          localStorage.removeItem('userid');
          this.router.navigate(['/resetpasswordsuccess']);
        },
        error: (err: any) => {
          this.progressService.setFailure();
          this.alertService.danger(err.error.errors[0].description);
          this.progressService.completeLoading();
        },
      };
  
      this.authService.resetpassword(this.model).subscribe(resetObserver);
    }
    else{
      this.progressService.setFailure();
      this.alertService.danger('Password and confirm password not match');
      this.progressService.completeLoading();
    }

  }
}
