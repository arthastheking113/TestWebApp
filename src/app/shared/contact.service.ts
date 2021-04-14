import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  readonly baseUrl = "https://duylanle-contactbook.herokuapp.com/api/Contacts";
  formData:Contact = new Contact();
  list : Contact[];
  postContact(){
    this.formData.userId = localStorage.getItem('userid');
    return this.http.post(this.baseUrl, this.formData );
  }

  refeshList(){
    this.http.get(`${this.baseUrl}/getcontact/${localStorage.getItem('userid')}`)
    .toPromise()
    .then(res => this.list = res as Contact[]);
  }

  putContact(){
    this.formData.userId = localStorage.getItem('userid');
    return this.http.put(`${this.baseUrl}/${this.formData.id}`, this.formData );
  }
  deleteContact(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
