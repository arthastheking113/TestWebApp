import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { PublicComponent } from './pages/public/public.component';

const routes: Routes = [
  { path: '', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'public', component: PublicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
