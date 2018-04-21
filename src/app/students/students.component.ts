import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Array<object>;
  title: string;
  response: Array<string>;

  list: Array<string>;
  flag: boolean
  constructor(
    private myservice: MyserviceService,
  ) {
    this.list = ['s1', 's2', 's3'];
    this.flag = false;
  }

  getResponse(): void {
    let endpoint = 'students';
    this.myservice.getPath(endpoint).subscribe(
      res => {
        console.log(res);
        this.response = res;
      },
      err => {
        console.log(err);
      }
    )
  }
  
  ngOnInit() {
    this.getResponse();
  }
  alertMethod(): void {
    alert("This is my parent");
  }

}