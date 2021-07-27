import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stripper-stet-two',
  templateUrl: './stripper-stet-two.component.html',
  styleUrls: ['./stripper-stet-two.component.css']
})

export class StripperStetTwoComponent implements OnInit {
 
  stepTwoForm=this.fb.group({
    bankName: ['', Validators.required],
    accountName: ['', Validators.required],
    bankAccountNumber: ['', [Validators.pattern('^[0-12]{12}$'), Validators.required]],
    ifsc: ['', [Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$"), Validators.required]],
    addharCard:['', [Validators.pattern('^[0-12]{12}$'), Validators.required]],
    pancard:['', [Validators.pattern('^[0-12]{12}$'), Validators.required]],
  })

  constructor(private fb:FormBuilder) {   
  }

  ngOnInit(): void {
  }

  get f() {return this.stepTwoForm.controls}
}
