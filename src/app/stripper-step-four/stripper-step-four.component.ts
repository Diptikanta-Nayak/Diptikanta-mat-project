import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stripper-step-four',
  templateUrl: './stripper-step-four.component.html',
  styleUrls: ['./stripper-step-four.component.css']
})
export class StripperStepFourComponent implements OnInit {
  hideShow=true;
  orderForm = this.fb.group({
    items: new FormArray([]),
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

get f(){return this.orderForm.controls}

  fuchideShow() {
    const data = this.orderForm.get('items') as FormArray;

    data.push(this.createItem());

    console.log('sdfsdf', this.orderForm);
  }

  onSave(){
    if(this.orderForm.invalid){
      this.orderForm.markAllAsTouched();
    return;
  
    }
    
  }

}
