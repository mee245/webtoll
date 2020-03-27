import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string;
  showSpinner = false;

  constructor( private userService: UserService ) { }

  ngOnInit() {
    this.showSpinner = true;
    this.userService.delete()

    .subscribe
    (
      data => {
      this.showSpinner = false;
      this.message = 'Data Deleted Successfully!';
      }
    );

}
}



