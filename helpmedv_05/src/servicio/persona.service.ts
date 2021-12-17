import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPersona } from 'src/pages/interfaz/IPersona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url:string = "http://localhost:3000/usuario";
  private persona:HttpClient;
  public usuarioLogeado:IPersona;


  constructor(moduloHttp: HttpClient) {
    this.persona = moduloHttp;
   }

   public listarUsuarios(): Observable<Array<IPersona>>{
    return this.persona.get<Array<IPersona>>(this.url);
  }

   public agregarPersona (personaNueva:IPersona):Observable<IPersona>{
    return this.persona.post<IPersona>(this.url,JSON.stringify(personaNueva), {
      headers: {
        "Content-Type":"application/json"
      }
      
    }); 
   }
  public eliminarUsuario(id:number):Observable<IPersona>{
    return this.persona.delete<IPersona>(this.url+"/"+id)
  }

  public modificarPersona (personaNueva:IPersona, id:number):Observable<IPersona>{
    return this.persona.put<IPersona>(this.url+"/"+id,JSON.stringify(personaNueva), {
      headers: {
        "Content-Type":"application/json"
      }
    }); 
    
  }
  public async iniciarSesion(usuario: string, contrasena: string): Promise<boolean>{
    let retorno = false;
    const resultado =  await this.persona
    .get<Array<IPersona>>(`http://localhost:3000/usuario?usuario=${usuario}&contrasena=${contrasena}`)
    .toPromise();
    if(resultado.length === 0){
      retorno = false;
    }
    else {
      this.usuarioLogeado = resultado[0];
      retorno = true;
    }
    return retorno;
  }
}
