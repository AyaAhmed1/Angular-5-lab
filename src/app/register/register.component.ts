import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dataForm: object;

  constructor(
    private router: Router,
    private myservice: MyserviceService,

  ) {
    this.dataForm = {};
  }

  ngOnInit() {
  }
  register(form: NgForm): void {
    if (form.valid) {
      // console.log(form);
      console.log(this.dataForm);
      this.myservice. postDataRegister(this.dataForm).subscribe(
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
