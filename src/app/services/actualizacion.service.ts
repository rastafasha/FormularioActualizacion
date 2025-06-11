import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Actualizacion } from '../models/actualizacion';


const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ActualizacionService {

  public actualizacion: Actualizacion;


  constructor(private http: HttpClient) { }

  createDirectorio(actualizacion) {

    const url = `${baseUrl}/actualizacion/store`;
    return this.http.post(url, actualizacion);
  }










}
