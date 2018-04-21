import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'App';

  constructor(
    private router: Router
  ) { 

  }
  ngOnInit() {
  }
  ngOnDestroy() {

    alert("done");
  }
  go(path: string): void {
    this.router.navigate([path]);
  }

  redirectto(): void {
    this.router.navigate(['/login/']);
  }

 
}