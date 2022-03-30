import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formdetails',
  templateUrl: './formdetails.component.html',
  styleUrls: ['./formdetails.component.scss']
})
export class FormdetailsComponent implements OnInit {

  constructor() { }
  value:{}={email:"",
            phoneno:"",
            uname:"",
            password:""};
  

  ngOnInit(): void {
  }
  OnSubmit(f:NgForm){
    //console.log(f.value);
    this.value=f.value;
    console.log(this.value);
    f.reset();


  }

}
