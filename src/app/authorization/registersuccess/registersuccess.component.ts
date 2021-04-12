import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registersuccess',
  templateUrl: './registersuccess.component.html',
  styles: [
  ]
})

export class RegistersuccessComponent implements OnInit {

  model: any = {
    token: null
    //claim: 'Developer',
  };
  constructor() { }

  ngOnInit(): void {

  }

}
