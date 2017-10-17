import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Request, Headers } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {



  constructor(public http: Http) {
    console.log('Data Service Connected...');
  }

  //LOGIN
  adminLogin(LoginDetail: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:50263/api/Login/', JSON.stringify(LoginDetail), options)
      .map(res => res.json());
  }

  
  //CLASS
  //Get
  getDataClass() {
    return this.http.get('http://localhost:50263/api/Class/GetAllClasses')
      .map(response => response.json());
  }

  //POST
  postClass(registerClass: any) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:50263/api/Class/AddClass/', JSON.stringify(registerClass), options)
      .map(res => res.json());
  }




  //DELETE BY ID
  deleteClassById(id: any) {
    console.log(id);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete('http://localhost:50263/api/Class/DeleteClassById/' + id, options)
      .map((res: Response) => res.json());
  }


  //STUDENT
  //Get Student Data
  getDataStudent() {
    return this.http.get('http://localhost:50263/api/Student/GetAllStudent/')
      .map(response => response.json());
  }
  //POST
  postStudent(registerStudent: any) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:50263/api/Student/AddStudent/', JSON.stringify(registerStudent), options)
      .map(res => res.json());
  }


  //STUDENT
  //DELETE BY ID
  deleteStudentById(id: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete('http://localhost:50263/api/Student/DeleteStudentById/' + id, options)
      .map((res: Response) => res.json());
  }

  
}
