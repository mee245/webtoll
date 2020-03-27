import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'departments', component: DepartmentComponent },
  { path: 'employees',   component: EmployeeComponent },
  { path: 'home',   component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ DepartmentComponent,
                                  EmployeeComponent,
                                  HomeComponent];

