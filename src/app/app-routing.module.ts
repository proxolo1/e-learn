import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './componets/admin/admin.component';
import { HomwComponent } from './componets/homw/homw.component';
import { LoginComponent } from './componets/login/login.component';
import { ProfileComponent } from './componets/profile/profile.component';
import { RegistrationComponent } from './componets/registration/registration.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: "register", component: RegistrationComponent
  },
  { path: "", component: HomwComponent ,canActivate:[AuthGuard]},
  { path: "login", component: LoginComponent,canActivate:[AuthGuard] },
  { path: "admin", component: AdminComponent,canActivate:[AuthGuard] },
  {path:"profile",component:ProfileComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
