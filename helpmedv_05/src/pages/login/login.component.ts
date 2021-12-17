import { Component } from "@angular/core";
import { PersonaService } from "src/servicio/persona.service";
import { Router } from "@angular/router";


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public contrasena = "";
    public usuario = "";
    constructor(private servicio: PersonaService, private router:Router) {
    }  
  
    public iniciarSesion(){
      this.servicio.iniciarSesion(this.usuario, this.contrasena)
      .then( respuestado => {
        if(respuestado){
          alert(this.servicio.usuarioLogeado.nombre);
          this.router.navigateByUrl('menu-principal')
        }
        else{
          alert("Usuario y contraseña no existen....");
        }
      })
    }
  }
  