import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stripper-step-five',
  templateUrl: './stripper-step-five.component.html',
  styleUrls: ['./stripper-step-five.component.css']
})

export class StripperStepFiveComponent implements OnInit {

  enableEdit: boolean = false;

  stepFiveForm = this.fb.group({
    experiencedetails: new FormArray([]),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createItem(): FormGroup {
    return this.fb.group({
      companyname: ['', Validators.required],
      position: ['', Validators.required],
      totalyear: ['', Validators.required],
      lastetc: ['', Validators.required],
    });
  }

  fuchideShow() {
    const data = this.stepFiveForm.get('experiencedetails') as FormArray;
    data.push(this.createItem());
  }

  onSave(i) {
    const data = this.stepFiveForm.get('experiencedetails') as FormArray;
    let itemsContorls = this.stepFiveForm.get('experiencedetails') as FormArray;
    if (itemsContorls.controls[i].invalid) {
      itemsContorls.controls[i].markAllAsTouched();
      return;
    }

    itemsContorls.controls[i].disable();

  }

  delete(i: number) {
    this.stepFiveForm.get('experiencedetails')['controls'].splice(i, 1);
  }

  edit(i) {
    let itemsContorls = this.stepFiveForm.get('experiencedetails') as FormArray;
    itemsContorls.controls[i].enable();
  }
}



