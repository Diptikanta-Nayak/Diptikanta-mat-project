import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stripper-step-three',
  templateUrl: './stripper-step-three.component.html',
  styleUrls: ['./stripper-step-three.component.css']
})
export class StripperStepThreeComponent implements OnInit {
  stepThreeForm=this.fb.group({
    designation:  ['', Validators.required],
    department:  ['', Validators.required],
    experience:['', Validators.required],
    currentLocation:['', Validators.required],
    skill:['', Validators.required],
    upload:['', Validators.required],
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  get f() {return this.stepThreeForm.controls}
}
