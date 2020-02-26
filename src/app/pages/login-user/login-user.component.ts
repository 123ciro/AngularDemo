import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  frmLogin: FormGroup;
  acceso:boolean;
  valor:String;
  mostrar:boolean;

  @Output() loginEmitter = new EventEmitter();
  @Output() logoutEmitter = new EventEmitter();

  constructor(
    public frmBuilder : FormBuilder,
    private router: Router
  ) { 

      }

  ngOnInit() {
    this.crearFrmlogin();
  }


  async crearFrmlogin(){
    this.frmLogin = this.frmBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  


  enviar(){

    if(this.frmLogin.valid){
      this.verificarLogin(this.frmLogin.value);
      sessionStorage.setItem("valores ",JSON.stringify(this.frmLogin.value));
    }else{
      this.mostrar=true;
      this.valor="d";
      
    }

    

  }


  //verificar las credenciales
  async verificarLogin(usuario: any){

    const storage = JSON.stringify(usuario);

    if(usuario.user == "admin" && usuario.password == "admin"){
      
      
      this.router.navigate(['dashboard']);
    }else{
      
        alert('Credenciales Invalidas')
            
    }


  }


}
