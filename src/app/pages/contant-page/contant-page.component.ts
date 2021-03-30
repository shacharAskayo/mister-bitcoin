import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contant-page',
  templateUrl: './contant-page.component.html',
  styleUrls: ['./contant-page.component.scss']
})
export class ContantPageComponent implements OnInit {
  constructor(private contactService:ContactService ) { }
  
  contacts:any

  ngOnInit(): void {
    this.contacts= this.contactService.loadContacts()
    
  }

}
