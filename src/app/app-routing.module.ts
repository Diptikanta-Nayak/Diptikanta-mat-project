import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserstripperComponent } from './userstripper/userstripper.component';
import { StripperStepOneComponent } from './stripper-step-one/stripper-step-one.component';
import { StripperStetTwoComponent } from './stripper-stet-two/stripper-stet-two.component';
import { StripperStepThreeComponent } from './stripper-step-three/stripper-step-three.component';
import { StripperStepFourComponent } from './stripper-step-four/stripper-step-four.component';
import { StripperStepFiveComponent } from './stripper-step-five/stripper-step-five.component';
import { StripperStepSixComponent } from './stripper-step-six/stripper-step-six.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path: 'userstripper', component: UserstripperComponent },
  { path: 'userstripper-edit/:id', component: UserstripperComponent },
  { path: 'stripper-step-one', component: StripperStepOneComponent },
  { path: 'stripper-step-two', component: StripperStetTwoComponent },
  { path: 'stripper-step-three', component: StripperStepThreeComponent },
  { path: 'stripper-step-four', component: StripperStepFourComponent },
  { path: 'stripper-step-five', component: StripperStepFiveComponent },
  { path: 'stripper-step-six', component: StripperStepSixComponent },
  { path: 'employee', component: EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
