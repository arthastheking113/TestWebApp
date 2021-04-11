import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { PublicComponent } from './pages/public/public.component';
import { RegistersuccessComponent } from './authorization/registersuccess/registersuccess.component';

const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'public', component: PublicComponent },
  { path: 'registersuccess', component: RegistersuccessComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
