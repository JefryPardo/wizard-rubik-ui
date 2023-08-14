import { Injectable } from '@angular/core';
import Usuario from '../interface/usuario-interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioDataService {

  usuario: Usuario;

  constructor() { 

    this.usuario = {
      uid: '',
      displayName: '',
      email: '',
      photoURL: '',
      accessToken: '',
      estado: false
    }; 
  }
}
