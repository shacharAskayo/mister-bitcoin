
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService} from '../user-service.service'

@Injectable({
  providedIn: 'root'
})
export class UserResolverService {

  constructor(private userService:UserService) { }
  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params
    return this.userService.getUser(id)
    
  }
}

