import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee = [];
  showSpinner = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.userService.getcomments()
    .subscribe
    (
      data => {
      this.showSpinner = false;
      this.employee = data;
      }
    );
  }
  }


