import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  datalist: any;
  id: any;
  result: any;
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.datalist = JSON.parse(localStorage.getItem('employeedata'));
    console.log(this.datalist);

    this.id = this.route.snapshot.params['id'];

    this.result = this.datalist.filter((word,index) =>index==this.id);
    console.log('result',this.result) 
  }

  delete(){
 this.datalist.splice(this.id,1)
 console.log('this.datalist',this.datalist)
  localStorage.setItem('employeedata',JSON.stringify( this.datalist))
  }
}
