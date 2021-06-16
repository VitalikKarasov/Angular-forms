import { Component, OnInit } from '@angular/core';

export class User {
  public name: string;
  public email: string;
  public password: string;
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  model = new User();

  constructor() { }

  ngOnInit(): void {
  }
 

  submit(data) {
    console.log(data.value)
  
  }
}
