import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ForgotpasswordcheckemailComponent } from './forgotpasswordcheckemail/forgotpasswordcheckemail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegistersuccessComponent } from './registersuccess/registersuccess.component';
import { ResendemailconfirmationComponent } from './resendemailconfirmation/resendemailconfirmation.component';
import { ResendemailconfirmationsuccessComponent } from './resendemailconfirmationsuccess/resendemailconfirmationsuccess.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ResetpasswordsuccessComponent } from './resetpasswordsuccess/resetpasswordsuccess.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'confirmemail', component: ConfirmEmailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'registersuccess', component: RegistersuccessComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'forgotpasswordcheckemail', component: ForgotpasswordcheckemailComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'resetpasswordsuccess', component: ResetpasswordsuccessComponent },
  { path: 'resendemailconfirmation', component: ResendemailconfirmationComponent },
  { path: 'resendemailconfirmationsuccess', component: ResendemailconfirmationsuccessComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

