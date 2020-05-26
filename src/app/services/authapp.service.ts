import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class AuthData{
  constructor(
    public codice: string,
    public messaggio: string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class AuthappService {
  
  constructor(private httpClient:HttpClient) { }

  server = "localhost";
  port = "5001";

  autentica(UserId, Password){
    if(UserId === "Paolo" && Password === "Password1!")
    {
      sessionStorage.setItem("Utente",UserId);
      return true;
    }
    else
    {
      return false;
    }
  }

  autenticaService(UserId: string, Password: string) {

    let headers = new HttpHeaders(
      {Authorization:   "Basic " + window.btoa(UserId + ":" + Password) }
    )

    return this.httpClient.get<AuthData>(
      `http://${this.server}:${this.port}/api/articoli/test`, 
      {headers})
      .pipe(
        map(
          data => {
            sessionStorage.setItem("Utente", UserId);
            return data;
          }
        )
      );
  }

  loggedUser()
  {
    let utente = sessionStorage.getItem("Utente");
    return (sessionStorage.getItem("Utente")!=null)?utente:""
  }

  isLogged(){
    return (sessionStorage.getItem("Utente")!=null)?true:false
  }

  logOut(){
    sessionStorage.removeItem("Utente");
  }
}
