import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{path:"department",component:DepartmentComponent},
{path:"employee",component:EmployeeComponent},
{path:"home",component:HomeComponent},
{path:"contact",component:ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[HomeComponent,EmployeeComponent,DepartmentComponent,ContactComponent];