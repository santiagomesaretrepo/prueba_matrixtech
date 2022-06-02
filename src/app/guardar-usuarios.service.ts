import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
//importando el llamado al htpp 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardarUsuariosService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }
  //el serivcio el que me va mandar los datos ala api para gurdar 
   add(data:any): Observable<any> {
    return this.http.post(this.baseUrl + '/nuevoUsuario', data);
  } 
}
