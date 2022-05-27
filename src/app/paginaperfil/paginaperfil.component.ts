import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-paginaperfil',
  templateUrl: './paginaperfil.component.html',
  styleUrls: ['./paginaperfil.component.css']
})
export class PaginaperfilComponent implements OnInit {
  data:any;
  constructor() { }

  ngOnInit(): void {
    this.data=this.loadStore();
    //console.log( this.data);
    //this.detallesRemision(this.numeroRemision)
  }
  loadStore() {
    let datoContainer = localStorage.getItem('data')
    return datoContainer;
  }
}
