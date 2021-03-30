import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor( private router: Router) { }
  @Input() contacts:Array<object>

  ngOnInit(): void {
    
  }
  toggleOpenEdit() {
    this.router.navigateByUrl('/edit')
  }

}
