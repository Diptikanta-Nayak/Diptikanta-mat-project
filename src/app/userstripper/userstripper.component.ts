import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { StripperStepOneComponent } from '../stripper-step-one/stripper-step-one.component';
import { StripperserviceService } from '../stripperservice.service';

@Component({
  selector: 'app-userstripper',
  templateUrl: './userstripper.component.html',
  styleUrls: ['./userstripper.component.css']
})
export class UserstripperComponent implements OnInit {
 
  //  @ViewChild(StripperStepOneComponent,{ static: false }) child: StripperStepOneComponent; 

  @ViewChild('dataref', { static: false }) child;

  constructor(private stepperService:StripperserviceService) {

    this.stepperService.getEmployeeStepper().subscribe((data)=>{
      console.log('data',data)
    });
   }
   
  ngOnInit() {
  }
  ngAfterViewInit() {
    
  }
 
  next(stepper: MatStepper) {

    if (this.child.stepOneForm.invalid) {
     
      this.child.stepOneForm.markAllAsTouched();
     return;
    }
    this.stepperService.setEmployeeStepper(this.child.stepOneForm.value);
      stepper.next();
  }
}




