import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //interpolation binding 
  name="samyak"
  college="DR B"
  num1=10
  num2=20


  pn=
  {
    name:'samyak',
    collage:'DR',
    email:'samyakj@gamilcom',
    branch:'IT'
  }

  name1='sam'

  hide=false

  num=2
}
