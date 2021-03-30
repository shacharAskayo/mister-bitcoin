import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private userService:UserService,private router:Router) { }
  
credential={
  name:'',
  password:''
}
  
  ngOnInit(): void {

  }

  onLogin(){
    const user=this.userService.onLogin(this.credential)
    this.router.navigateByUrl(`home/${user._id}`)
    this.router.navigated
  }


}
