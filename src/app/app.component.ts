//linea para imporatel servicio para guardar 
import { GuardarUsuariosService } from './guardar-usuarios.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class AppComponent implements OnInit{
  //declaracion de variable 
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe :any;
  cedulaUsuario:any;
  nombreUsuario:any;
  apellidoUsuario:any;
  emailUsuario:any;
  telefonoUsuario:any;
  cities:any[];
  selectedCities: any;
  country:any[];
  selectedCountry: any;

  //tituto de la pagina pricipal
  title = 'Formulario Usuario';

  constructor(
    private guardarUsuariosService:GuardarUsuariosService,
    private router: Router,
    private messageService: MessageService,
  ) {


  //select para cidudades y paises  
  this.cities = [
      {name: 'Bogota', code: 'NY'},
      {name: 'Medellin', code: 'RM'},
      {name: 'Bucaramanga', code: 'LDN'},
      {name: 'Buena Aventura', code: 'IST'},
  ];
  this.country = [
    {name: 'Colombia', code: 'NY'},
    {name: 'Argentina', code: 'RM'},
    {name: 'Mexíco', code: 'LDN'},
];
  }
  //fecha actual para colocar en el Footer
  ngOnInit(): void {
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
  }
  enviar(){
    const data={
      "cedulaUsuario":this.cedulaUsuario,
      "nombreUsuario":this.nombreUsuario,
      "apellidoUsuario":this.apellidoUsuario,
      "emailUsuario":this.emailUsuario,
      "telefonoUsuario":this.telefonoUsuario,
      "selectedCities":this.selectedCities.name,
      "selectedCountry":this.selectedCountry.name,
    }
    this.guardarUsuariosService.add(data).subscribe((resp: any) => {
      console.log(resp);
    }) 
  }
  //cambiar de pagina para consultar el usuario
  cambiarpagina(){
    console.log('hoa');
  }

}
