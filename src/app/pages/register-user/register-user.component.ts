import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor() { }

  pageActual:number=1;
  
  ngOnInit() {
  }

  listaPersona = [
    { id: '1', nombres: 'Nombre 1', apellidos: 'Apellido 1', fechaNacimiento: '14/04/1997', latitud: '-25.2864662', longitud: '-57.58861710000001',},
    { id: '2', nombres: 'Nombre 2', apellidos: 'Apellido 2', fechaNacimiento: '14/04/1997', latitud: '-25.2864662', longitud: '-57.58861710000001'},
    { id: '3', nombres: 'Nombre 3', apellidos: 'Apellido 3', fechaNacimiento: '14/04/1997', latitud: '-25.2864662', longitud: '-57.58861710000001'},
    { id: '4', nombres: 'Nombre 4', apellidos: 'Apellido 4', fechaNacimiento: '14/04/1997', latitud: '-25.2864662', longitud: '-57.58861710000001'},
    { id: '5', nombres: 'Nombre 5', apellidos: 'Apellido 5', fechaNacimiento: '14/04/1997', latitud: '-25.2864662', longitud: '-57.58861710000001'},
    { id: '6', nombres: 'Nombre 6', apellidos: 'Apellido 6', fechaNacimiento: '14/04/1997', latitud: '-25.2864662', longitud: '-57.58861710000001'},
    { id: '7', nombres: 'Nombre 7', apellidos: 'Apellido 7', fechaNacimiento: '14/04/1997', latitud: '-25.2864662', longitud: '-57.58861710000001'},
    { id: '8', nombres: 'Nombre 8', apellidos: 'Apellido 8', fechaNacimiento: '14/04/1997', latitud: '-25.2864662', longitud: '-57.58861710000001'},
    { id: '9', nombres: 'Nombre 9', apellidos: 'Apellido 9', fechaNacimiento: '14/04/1997', latitud: '-25.2864662', longitud: '-57.58861710000001'},
    { id: '10', nombres: 'Nombre 10', apellidos: 'Apellido 10', fechaNacimiento: '14/04/1997', latitud: '-25.2864662', longitud: '-57.58861710000001'},
    { id: '11', nombres: 'Nombre 11', apellidos: 'Apellido 11', fechaNacimiento: '14/04/1997', latitud: '-25.2864662', longitud: '-57.58861710000001'},
    { id: '12', nombres: 'Nombre 12', apellidos: 'Apellido 12', fechaNacimiento: '14/04/1997', latitud: '-25.2864662', longitud: '-57.58861710000001'},
    { id: '13', nombres: 'Nombre 13', apellidos: 'Apellido 13', fechaNacimiento: '14/04/1997', latitud: '-25.2864662', longitud: '-57.58861710000001'},
    { id: '14', nombres: 'Nombre 14', apellidos: 'Apellido 14', fechaNacimiento: '14/04/1997', latitud: '-25.2864662', longitud: '-57.58861710000001'}
  ];



}
