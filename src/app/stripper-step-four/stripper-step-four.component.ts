import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stripper-step-four',
  templateUrl: './stripper-step-four.component.html',
  styleUrls: ['./stripper-step-four.component.css']
})
export class StripperStepFourComponent implements OnInit {

  enableEdit:boolean=false;

  stepFourForm = this.fb.group({
    educationdetails: new FormArray([]),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createItem(): FormGroup {
    return this.fb.group({
      educationname: ['', Validators.required],
      universityname: ['', Validators.required],
      result: ['', Validators.required],
      yearofpassing: ['', Validators.required],
    });
  }

  addEducation() {
    const data = this.stepFourForm.get('educationdetails') as FormArray;
    data.push(this.createItem());
    console.log('DATA', this.stepFourForm);
  }

  onSave(i) {
    let  itemcontrol = this.stepFourForm.get('educationdetails') as FormArray;
    if (itemcontrol.controls[i].invalid) {
      itemcontrol.controls[i].markAllAsTouched();
      return;
    }

    itemcontrol.controls[i].disable();

  }

  delete(i:number){
      this.stepFourForm.get('educationdetails')['controls'].splice(i, 1);  
  }

  edit(i){
    let itemcontrol = this.stepFourForm.get('educationdetails') as FormArray;
    itemcontrol.controls[i].enable();
  }
}
