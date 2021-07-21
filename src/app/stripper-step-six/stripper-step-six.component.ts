import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stripper-step-six',
  templateUrl: './stripper-step-six.component.html',
  styleUrls: ['./stripper-step-six.component.css']
})
export class StripperStepSixComponent implements OnInit {
  stepSixForm = this.fb.group({
    joiningDate: ['', Validators.required],
    appraisaldate: ['', Validators.required],
    currentctc: ['', (Validators.required, Validators.pattern("^[0-9]*$"))]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  get f() { return this.stepSixForm.controls }

}
