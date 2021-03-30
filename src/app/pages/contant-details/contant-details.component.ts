import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contant-details',
  templateUrl: './contant-details.component.html',
  styleUrls: ['./contant-details.component.scss']
})
export class ContantDetailsComponent implements OnInit {
  constructor(private contactService:ContactService , private route: ActivatedRoute,private router:Router) { }
  contact

   ngOnInit():void {
    this.route.data.subscribe(data=>{
      this.contact=data.contact
    })
  }
  onEditContact(id){
    this.router.navigateByUrl(`/edit/${id}`)
    
  }
  
  onRemove(id){
    this.contactService.deleteContact(id)
    this.router.navigateByUrl(`/contact`)
  }
    

}
