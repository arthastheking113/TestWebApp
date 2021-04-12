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
