import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ForgotpasswordcheckemailComponent } from './forgotpasswordcheckemail/forgotpasswordcheckemail.component';
import { LoginComponent } from './login/login.component';
import { ChangeemailComponent } from './profile/changeemail/changeemail.component';
import { ChangeemailsuccessComponent } from './profile/changeemailsuccess/changeemailsuccess.component';
import { ChangeemailsuccesssComponent } from './profile/changeemailsuccesss/changeemailsuccesss.component';
import { ChangepasswordComponent } from './profile/changepassword/changepassword.component';
import { ProfileComponent } from './profile/profile/profile.component';
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
  { path: 'account/profile', component: ProfileComponent },
  { path: 'account/changeemail', component: ChangeemailComponent },
  { path: 'account/changepassword', component: ChangepasswordComponent },
  { path: 'account/changeemailsuccess', component: ChangeemailsuccessComponent },
  { path: 'account/changeemailsuccesss', component: ChangeemailsuccesssComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

