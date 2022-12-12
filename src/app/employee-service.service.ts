import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  

  private baseURL="http://localhost:8081/Empolyee/"
  constructor(private httpclinet:HttpClient) { }
   getEmployeList():Observable<Employee[]>{
    return this.httpclinet.get<Employee[]>(`${this.baseURL}`);
   }

   crateEmployee(employee:Employee):Observable<Object>{
    return this.httpclinet.post(`${this.baseURL}`,employee);
    }

    deleteEmployee(id:number |undefined):Observable<object>{
      return this.httpclinet.delete(`${this.baseURL}${id}`);
    }

    getEmployeeById(id:number |undefined):Observable<Employee>{
      return this.httpclinet.get<Employee>(`${this.baseURL}${id}`);
    }

    updateEmployee(id:number | undefined , employee: Employee):Observable<object>{
      return this.httpclinet.put(`${this.baseURL}`,employee);    
  }
  }



