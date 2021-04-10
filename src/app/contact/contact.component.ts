import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor(public service: ContactService) { }

  ngOnInit(): void {
    this.service.refeshList();
  }

}
