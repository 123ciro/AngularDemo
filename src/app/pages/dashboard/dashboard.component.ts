import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  frmDash:FormGroup

  constructor(
    
  ) { }

  ngOnInit() {

  }



  listar(){
    alert('click')
  }

}
