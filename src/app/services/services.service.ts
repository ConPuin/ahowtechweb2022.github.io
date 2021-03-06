import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Details } from '../models/details';
/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()

export class ServicesService {


  constructor(private http: HttpClient) { }
  Url = 'http://localhost:3000/sendmail'; // Vendedor
  Url1 = 'http://localhost:8080/testapp/getdetails';

  enviarMail(details: Details){
    return this.http.post<Details>(this.Url1, details);
  }

  sendMenssage(body:any){
    return this.http.post(this.Url,body);
  }

}
