import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService }from '../employee-service.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  employee:Employee =new Employee();
  
  constructor(private EmployeeServiceService:EmployeeServiceService,
    private router:Router) { }

  ngOnInit(): void {
   
  }

  saveEmployee(){
    this.EmployeeServiceService.crateEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },error =>console.log(error));
   
  }

  goToEmployeeList(){
    this.router.navigate(['/table']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee()
  }

}
