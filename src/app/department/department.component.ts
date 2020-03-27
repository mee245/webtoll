import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Posts } from '../posts';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  objPosts: Posts[];
  showSpinner = false;

constructor(private userService: UserService) {}

  ngOnInit() {

    const opost = new Posts();
    opost.body = 'Testbody';
    opost.title = 'Testtitle';
    opost.userId = 5;

    this.showSpinner = true;
    this.userService.post(opost)

    .subscribe
    (
      data => {
        this.showSpinner = false;
        this.objPosts = data;
      }
    );
  }
}
