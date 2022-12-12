import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService }from '../employee-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  
  Employees:Employee[] | undefined  ;
  employeeServices: any;
  

  constructor(private EmployeeServiceService:EmployeeServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getEmployeList();
  }
  private getEmployeList() {
    this.EmployeeServiceService.getEmployeList().subscribe(data =>{
     this.Employees=data;
    });
   }

  deleteEmployee(id:number | undefined){
    this.EmployeeServiceService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.getEmployeList();
    });
  }
  updatedEmployee(id:number | undefined)
  {
     this.router.navigate(['modify',id]);
  }
  EmployeeDetails(id : number | undefined){
    this.router.navigate(['employee_details',id]);
  }

}
