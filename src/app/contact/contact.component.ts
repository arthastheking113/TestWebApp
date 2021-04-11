import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthService } from 'src/app/authorization/resources/auth.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})

export class ContactComponent implements OnInit {

  constructor(public service: ContactService,
    authService: AuthService,
     router: Router) {
    if (!authService.isLoggedIn) {
      router.navigate(['/']);
    }
  }
  
  ngOnInit(): void {
    this.service.refeshList();
  }
  
}
