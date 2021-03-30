import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(private contactService:ContactService,private route: ActivatedRoute,private router:Router) { }
  newContact={
    name:'',
    phone:'',
    email:'',
    coins:100,
    moves:[]
  }

  ngOnInit(): void {
    this.route.data.subscribe(res=>{
      if(res.contact) this.newContact=res.contact
      })
    
    //  res.contact? console.log(res):console.log('fuck');
    // })
    // console.log('=====the routes=====',this.route.params);
    
  }
  
  onSubmit(){
    this.route.data.subscribe(res=>{
      if(res.contact) this.contactService.saveContact(this.newContact)
      else this.contactService.saveContact(this.newContact)
    })
      this.router.navigateByUrl('/contact')
      
      

    
    
    
  }

}
