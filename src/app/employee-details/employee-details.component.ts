import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService }from '../employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number | undefined;
  employee:Employee =new Employee();
  constructor(private router:ActivatedRoute,
    private EmployeeServiceService:EmployeeServiceService,) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.employee=new Employee();
    this. EmployeeServiceService.getEmployeeById(this.id).subscribe(data =>{
      this.employee=data;
    })
  }

}
