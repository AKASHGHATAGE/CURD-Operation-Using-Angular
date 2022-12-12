import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   name: string |undefined;
   address: string |undefined;

  constructor(private router:Router) { }
  employee:Employee =new Employee();
  ngOnInit(): void {
  }

  logincheck(){
    if(this.name=="Akash"&& this.address=="kolhapur")
    {
         this.router.navigate(["Home"]);
    }
    else{
      console.log(this.name);
      alert("Wrong Password :(");
    }
  }

}
