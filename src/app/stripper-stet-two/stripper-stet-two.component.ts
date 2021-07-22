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
    bankAccountNumber: ['',[ Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(12)]],
    ifsc: ['', Validators.required],
    addharCard:['', Validators.required],
    pancard:['', Validators.required],
  })

  constructor(private fb:FormBuilder) { 
    
  }

  ngOnInit(): void {
  }
  get f() {return this.stepTwoForm.controls}

}
