
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { StripperserviceService } from '../stripperservice.service';

@Component({
  selector: 'app-userstripper',
  templateUrl: './userstripper.component.html',
  styleUrls: ['./userstripper.component.css']
})
export class UserstripperComponent implements OnInit {
dalaemploye=[];
  isLinear = true;
  @ViewChild('stepone') stepOne;
  @ViewChild('steptwo') stepTwo;
  @ViewChild('stepthree') stepThree;
  @ViewChild('stepfour') stepFour;
  @ViewChild('stepfive') stepFive;
  @ViewChild('stepsix') stepSix;
  id: any;
  

  constructor(private stepperService: StripperserviceService,private route:ActivatedRoute) {

   this.stepperService.getEmployeeStepper().subscribe((data) => {   
      console.log('data',data)  
    });
  }

  ngOnInit() { 
    const dataemplpoyee=JSON.parse(localStorage.getItem('employeedata')||'[]');
    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      debugger;
      console.log('dataemplpoyee',dataemplpoyee)
      const createemployee =dataemplpoyee[this.id];
      this.stepOne.stepOneForm.value.patchValue(createemployee);
     
            
    }
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

      case 3:
        if (this.stepFour.stepFourForm.invalid) {
          this.stepFour.stepFourForm.markAllAsTouched();
          return;
        }
        break;

      case 4:
        if (this.stepFive.stepFiveForm.invalid) {
          this.stepFive.stepFiveForm.markAllAsTouched();
          return;
        }
        break;

      case 5:
        if (this.stepSix.stepSixForm.invalid) {
          this.stepSix.stepSixForm.markAllAsTouched();
          return;
        }
        break;
    }

    //merge object
    this.stepperService.setEmployeeStepper({
      ...this.stepOne.stepOneForm.value,
      ...this.stepTwo.stepTwoForm.value,
      ...this.stepThree.stepThreeForm.value,
      ...this.stepFour.stepFourForm.value,
      ...this.stepFive.stepFiveForm.value,
      ...this.stepSix.stepSixForm.value
    });
  
    if(stepper.selectedIndex === 5){
      const dataemplpoyee=JSON.parse(localStorage.getItem('employeedata')||'[]');

      dataemplpoyee.push({
        ...this.stepOne.stepOneForm.value,
        ...this.stepTwo.stepTwoForm.value,
        ...this.stepThree.stepThreeForm.value,
        ...this.stepFour.stepFourForm.value,
        ...this.stepFive.stepFiveForm.value,
        ...this.stepSix.stepSixForm.value
      });
      // localStorage.setItem('employeedata',JSON.stringify([{
      //   ...this.stepOne.stepOneForm.value,
      //   ...this.stepTwo.stepTwoForm.value,
      //   ...this.stepThree.stepThreeForm.value,
      //   ...this.stepFour.stepFourForm.value,
      //   ...this.stepFive.stepFiveForm.value,
      //   ...this.stepSix.stepSixForm.value
      // }])); 

      localStorage.setItem('employeedata',JSON.stringify(dataemplpoyee));

     
   

  }  
    stepper.next();  
}
  }

