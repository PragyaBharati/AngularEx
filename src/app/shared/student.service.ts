import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  readonly sUri ='https://localhost:44352/api/Students1';
  StudentList:Student[];
  constructor(private objhttp:HttpClient) { }

  StudentList(){
    this.objhttp.get(this.StudentUrl+'/Students').toPromise().then(res=>this.StudentList=res as Student[]);
  }

}
