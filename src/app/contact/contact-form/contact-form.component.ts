import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/shared/contact.model';
import { ContactService } from 'src/app/shared/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [
  ]
})
export class ContactFormComponent implements OnInit {

  constructor(public service: ContactService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){

    if(this.service.formData.id == 0){
      this.insertRecord(form);
    }else{
      this.updateRecord(form);
    }


   
  }
  insertRecord(form: NgForm){
  
    this.service.postContact().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.success('Added contact successfully', 'Contact Register');
        this.service.refeshList();
      },
      err =>{console.log(err);}
    );
  }

  updateRecord(form: NgForm){
    this.service.putContact().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.info('Updated contact successfully', 'Contact Register');
        this.service.refeshList();
      },
      err =>{console.log(err);}
    );
  }
  resetForm(form: NgForm){
    form.form.reset;
    this.service.formData = new Contact();
  }
  
}
