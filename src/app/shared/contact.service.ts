import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  readonly baseUrl = "https://localhost:44370/api/Contacts";
  formData:Contact = new Contact();
  list : Contact[];
  postContact(){
    return this.http.post(this.baseUrl, this.formData );
  }

  refeshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(res => this.list = res as Contact[]);
  }
}
