import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-stripper-step-one',
  templateUrl: './stripper-step-one.component.html',
  styleUrls: ['./stripper-step-one.component.css']
})
export class StripperStepOneComponent implements OnInit {

  copyCtrl = new FormControl(false);

  stepOneForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    mobileNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    dateOfBirth: ['', Validators.required],
    file: ['', Validators.required],
    presentAddress: ['', Validators.required],
    permanentAaddress: ['', Validators.required],
    acceptTerms: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get f() { return this.stepOneForm.controls }

  uploadFile($event: Event) {

// Display image on new tab
  const fileupload = ($event.target as HTMLInputElement).files[0]; 
  let  src=URL.createObjectURL(fileupload);
  window.open(src);
    }
   
}
