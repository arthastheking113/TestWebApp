import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthLinksComponent } from './auth-links/auth-links.component';
import { AuthButtonsComponent } from './auth-buttons/auth-buttons.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { RegistersuccessComponent } from './registersuccess/registersuccess.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ForgotpasswordcheckemailComponent } from './forgotpasswordcheckemail/forgotpasswordcheckemail.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ResetpasswordsuccessComponent } from './resetpasswordsuccess/resetpasswordsuccess.component';
import { ResendemailconfirmationComponent } from './resendemailconfirmation/resendemailconfirmation.component';
import { ResendemailconfirmationsuccessComponent } from './resendemailconfirmationsuccess/resendemailconfirmationsuccess.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ChangepasswordComponent } from './profile/changepassword/changepassword.component';
import { ChangeemailComponent } from './profile/changeemail/changeemail.component';
import { ChangeemailsuccessComponent } from './profile/changeemailsuccess/changeemailsuccess.component';
import { ChangeemailsuccesssComponent } from './profile/changeemailsuccesss/changeemailsuccesss.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthLinksComponent,
    AuthButtonsComponent,
    ConfirmEmailComponent,
    RegistersuccessComponent,
    ForgotpasswordComponent,
    ForgotpasswordcheckemailComponent,
    ResetpasswordComponent,
    ResetpasswordsuccessComponent,
    ResendemailconfirmationComponent,
    ResendemailconfirmationsuccessComponent,
    ProfileComponent,
    ChangepasswordComponent,
    ChangeemailComponent,
    ChangeemailsuccessComponent,
    ChangeemailsuccesssComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, FormsModule, HttpClientModule],
  exports: [
    LoginComponent,
    RegisterComponent,
    AuthLinksComponent,
    AuthButtonsComponent,
  ],
})
export class AuthModule {}
