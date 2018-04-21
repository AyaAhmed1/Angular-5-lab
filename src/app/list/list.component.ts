import { Component, OnInit, Input, Output, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input('hamada') hamada: Array<string>;
  @Input('flag') flag: boolean;
  @Output() method: EventEmitter<any> = new EventEmitter();
  constructor() {
  }
  callParentMethod(): void {
    this.method.emit();
  }

  ngOnInit() {
    // console.log(this.hamada);
  }
}
