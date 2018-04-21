import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  dataForm: object;
  constructor(
    private router: Router,
    private myservice: MyserviceService,
  ) {
    this.dataForm = {};
  }
  ngOnInit() {
  }
  login(form: NgForm): void {
    if (form.valid) {
      // console.log(form);
      //console.log(this.dataForm);
      this.myservice.postDataLogin(this.dataForm).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/profile/']);
        },
        err => {
         console.log(err);
        }
      )
    }

  }
}