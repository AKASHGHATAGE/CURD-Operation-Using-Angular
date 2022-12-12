import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService }from '../employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  id:number | undefined;
  Employees:Employee[] | undefined  ;
  employee:Employee =new Employee();
  constructor(private EmployeeServiceService:EmployeeServiceService,
    private router:ActivatedRoute ,
    private routter:Router) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.EmployeeServiceService.getEmployeeById(this.id).subscribe(data =>{
      this.employee=data;
    },error => console.log(error));
    
  }

  goToEmployeeList(){
    this.routter.navigate(['/table']);
  }

  onSubmit(){
    this.EmployeeServiceService.updateEmployee(this.id,this.employee).subscribe(data =>{
      this.goToEmployeeList();
    }, error => console.log(error));
      
  }

 private getEmployeList() {
    this.EmployeeServiceService.getEmployeList().subscribe(data =>{
     this.Employees=data;
    });
   }

  cancelEmployee(){
    this.routter.navigate(['table']);
  }

  

  updateEmployee(id:number |undefined){
    this.EmployeeServiceService.updateEmployee(this.id,this.employee)
    .subscribe(data =>{
      console.log(data);
      this.getEmployeList();
    });
    
     
}
}

