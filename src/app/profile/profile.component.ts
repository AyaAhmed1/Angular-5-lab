import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  students: Array<object>;
  title: string;
  response: Array<string>;

  constructor(
    private myservice: MyserviceService,

  ) { }

  ngOnInit() {
    this.getResponse();
  }
  getResponse(): void {
    let endpoint = 'students';
    this.myservice.getPath(endpoint).subscribe(
      res => {
        this.response = res;
      },
      err => {
        console.log(err);
      }
    )
  }
 /*
  postResponse(): void {
   // let endpoint = 'students';
    let Data=[
     { email:'ayaaaaa',
      password:'aaaaaaaaaaaaaaaaa'}
   ];
       this.myservice.postData(Data).subscribe(
      res => {
        //this.response = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
*/

}
