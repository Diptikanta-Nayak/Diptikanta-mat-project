import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserstripperComponent } from './userstripper/userstripper.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  { path: 'userstripper', component: UserstripperComponent },
  { path: 'userstripper-edit/:id', component: UserstripperComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'profile-page/:id', component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
