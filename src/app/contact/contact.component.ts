import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthService } from 'src/app/authorization/resources/auth.service';
import { Contact } from '../shared/contact.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: ['./contact.component.scss'
  ]
})

export class ContactComponent implements OnInit {

  constructor(public service: ContactService,
    authService: AuthService,
     router: Router,
     private toastr: ToastrService) {
    if (!authService.isLoggedIn) {
      router.navigate(['/']);
    }
  }
  
  ngOnInit(): void {
    this.service.refeshList();
  }
  populateForm(selectedRecord: Contact){
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id:number){
    if(confirm('Are you sure you want to delete this record?'))
    {
      this.service.deleteContact(id).subscribe(res => {
        this.service.refeshList();
        this.toastr.error("Deleted successfully", "Contact Deleted");
      },
      err => {console.log(err)});
    }
   
  }
}
