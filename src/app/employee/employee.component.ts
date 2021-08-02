import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  datalist: any[] = [];

  constructor() {}

  ngOnInit(): void {   
    this.datalist = JSON.parse(localStorage.getItem('employeedata'));   
  }

  delete(i){
    this.datalist.splice(i,1);
    localStorage.setItem('employeedata',JSON.stringify( this.datalist))
  }
}
