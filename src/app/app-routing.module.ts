import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './componets/admin/admin.component';
import { HomwComponent } from './componets/homw/homw.component';
import { LoginComponent } from './componets/login/login.component';
import { ProfileComponent } from './componets/profile/profile.component';
import { RegistrationComponent } from './componets/registration/registration.component';

const routes: Routes = [
  {
    path: "register", component: RegistrationComponent
  },
  { path: "", component: HomwComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent },
  {path:"profile",component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
