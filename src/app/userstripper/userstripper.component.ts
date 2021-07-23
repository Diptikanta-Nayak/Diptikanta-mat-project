import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { StripperserviceService } from '../stripperservice.service';

@Component({
  selector: 'app-userstripper',
  templateUrl: './userstripper.component.html',
  styleUrls: ['./userstripper.component.css']
})
export class UserstripperComponent implements OnInit {

  @ViewChild('stepone') stepOne;
  @ViewChild('steptwo') stepTwo;
  @ViewChild('stepthree') stepThree;
  @ViewChild('stepfour') stepFour;
  @ViewChild('stepfive') stepFive;
  @ViewChild('stepsix') stepSix;

  constructor(private stepperService: StripperserviceService) {

    this.stepperService.getEmployeeStepper().subscribe((data) => {
      console.log('data', data)
    });
  }
  
  ngOnInit() {
  }
 
  previousStepper(stepper) {
    stepper.previous();
  }

  nextStepper(stepper: MatStepper) {

    switch (stepper.selectedIndex) {
      case 0:
        if (this.stepOne.stepOneForm.invalid) {
          this.stepOne.stepOneForm.markAllAsTouched();
          return;
        }
        break;

      case 1:
        if (this.stepTwo.stepTwoForm.invalid) {
          this.stepTwo.stepTwoForm.markAllAsTouched();
          return;
        }
        break;
        case 2:
        if (this.stepThree.stepThreeForm.invalid) {
          this.stepThree.stepThreeForm.markAllAsTouched();
          return;
        }
        break;
    }
    //merge object
     this.stepperService.setEmployeeStepper({...this.stepOne.stepOneForm.value, ...this.stepTwo.stepTwoForm.value,...this.stepThree.stepThreeForm.value});
    stepper.next();
  }
}

