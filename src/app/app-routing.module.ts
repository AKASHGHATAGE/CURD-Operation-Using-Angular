import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModifyComponent } from './modify/modify.component';
import { RegistrationComponent } from './registration/registration.component';
import { TableComponent } from './table/table.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  { path:"Home", component:HomeComponent} ,
  { path:"modify/:id",component:ModifyComponent},
  { path:"registration",component:RegistrationComponent},
  { path:"table",component:TableComponent},
  { path:"employee_details/:id",component:EmployeeDetailsComponent},
  { path:"login",component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
