import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class StripperserviceService {

  constructor() {
   }
  private employeeStepperBehaviourSubject = new BehaviorSubject<any>(null);

   getEmployeeStepper():Observable<any>{

    return this.employeeStepperBehaviourSubject.asObservable();
  }
   setEmployeeStepper(employeedata){

     this.employeeStepperBehaviourSubject.next(employeedata); 
   }
}
