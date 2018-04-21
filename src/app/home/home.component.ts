import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: Array<string>;
  flag: boolean
    ;
  constructor(
    private router: Router

  ) {
    this.list = ['aya', 'fo2a', 'sheshsh'];
    this.flag = true;
  }
  ngOnInit() {
  }

  go(path: string): void {
    this.router.navigate([path]);
  }
  alertMethod(): void {
    alert("This is my parent");
  }
  change(): void {
    this.list = ['new1', 'new2'];
  }

}
