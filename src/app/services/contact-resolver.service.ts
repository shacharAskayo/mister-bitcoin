import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService {

  constructor(private contactService:ContactService) { }
  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params
    
    return this.contactService.getContactById(id)
    
  }
}
