import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styleclasscomponent',
  templateUrl: './styleclasscomponent.component.html',
  styleUrls: ['./styleclasscomponent.component.css']
})
export class StyleclasscomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mystyle={
    'color': 'red',
    'background': 'yellow',
    'border-radius': '20px'
  }
  myclass={
    'color':true,
    'fontme':true,
    'borderme':true,
  }

}
