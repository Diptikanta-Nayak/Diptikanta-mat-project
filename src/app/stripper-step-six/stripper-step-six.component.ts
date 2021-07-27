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
    currentctc: ['', [Validators.pattern('^[0-4]{4}$'), Validators.required]]
  })
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  get f() { return this.stepSixForm.controls }
}
