import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //declaracion de variable 
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe :any;
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

  constructor() {
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
    let data={
      "nombreUsuario":this.nombreUsuario,
      "apellidoUsuario":this.apellidoUsuario,
      "emailUsuario":this.emailUsuario,
      "telefonoUsuario":this.telefonoUsuario,
      "selectedCities":this.selectedCities.name,
      "selectedCountry":this.selectedCountry.name,
    }

  }
}
