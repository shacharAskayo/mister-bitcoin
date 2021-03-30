import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
  constructor() { }
  @Input() move=''

  ngOnInit(): void {
    console.log(this.move);
    console.log('this.move');
  }
}
