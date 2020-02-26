import { Component, OnInit } from '@angular/core';
import { LoginUserComponent } from '../login-user/login-user.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 dropdown:boolean=false; 
  
 usuarioFrm: LoginUserComponent
  
  constructor(  ) { }

  ngOnInit() {

   
  
  }

}
