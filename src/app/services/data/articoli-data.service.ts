import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articoli, ApiMsg, Iva, FamAss } from 'src/app/articoli/articoli.component';
import { server, port } from 'src/app/app-costants';

@Injectable({
  providedIn: 'root'
})
export class ArticoliDataService {
  //server = "localhost";
  //port = "5001";

  constructor(private httpClient:HttpClient) { }
/*
  getBasicAuthHeader(){
    let UserId = "Paolo";
    let Password = "Password11";

    let retVal = "Basic " + window.btoa(UserId + ":" + Password);

    return retVal;
  }
*/
  getArticoliByDescription(descrizione : string) {
    /*
    let headers = new HttpHeaders(
      {Authorization:  this.getBasicAuthHeader() }
    )*/

    //return this.httpClient.get<Articoli[]>(`http://${server}:${port}/api/articoli/cerca/descrizione/${descrizione}`, {headers}); //ALT + 0096 | ALT GR + '
    return this.httpClient.get<Articoli[]>(`http://${server}:${port}/api/articoli/cerca/descrizione/${descrizione}`); //ALT + 0096 | ALT GR + '
  }

  getArticoliByCodArt(codart : string) {
    return this.httpClient.get<Articoli>(`http://${server}:${port}/api/articoli/cerca/codice/${codart}`);

  }
  getIva() {
    return this.httpClient.get<Iva>(`http://${server}:${port}/api/iva`);
  }
  getCat() {
    return this.httpClient.get<FamAss>(`http://${server}:${port}/api/cat`);
  }

  getArticoliByEan(barcode: string) {
    return this.httpClient.get<Articoli>(`http://${server}:${port}/api/articoli/cerca/barcode/${barcode}`);
  }

  delArticoloByCodArt(codart: string) {
    return this.httpClient.delete<ApiMsg>(`http://${server}:${port}/api/articoli/elimina/${codart}`);
  }

  updArticolo(articolo: Articoli) {
    return this.httpClient.put<ApiMsg>(`http://${server}:${port}/api/articoli/modifica`, articolo);
  }

  insArticoli(articolo: Articoli){
    return this.httpClient.post<ApiMsg>(`http://${server}:${port}/api/articoli/inserisci`, articolo);
  }
}
