import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articoli, ApiMsg, Iva, FamAss } from 'src/app/articoli/articoli.component';

@Injectable({
  providedIn: 'root'
})
export class ArticoliDataService {
  server = "localhost";
  port = "5001";

  constructor(private httpClient:HttpClient) { }

  getArticoliByDescription(descrizione : string) {
    
    return this.httpClient.get<Articoli[]>(`http://${this.server}:${this.port}/api/articoli/cerca/descrizione/${descrizione}`); //ALT + 0096 | ALT GR + '
    
  }

  getArticoliByCodArt(codart : string) {
    return this.httpClient.get<Articoli>(`http://${this.server}:${this.port}/api/articoli/cerca/codice/${codart}`);

  }

  getIva() {
    return this.httpClient.get<Iva>(`http://${this.server}:${this.port}/api/iva`);
  }
  getCat() {
    return this.httpClient.get<FamAss>(`http://${this.server}:${this.port}/api/cat`);
  }

  getArticoliByEan(barcode: string) {
    return this.httpClient.get<Articoli>(`http://${this.server}:${this.port}/api/articoli/cerca/barcode/${barcode}`);
  }

  delArticoloByCodArt(codart: string) {
    return this.httpClient.delete<ApiMsg>(`http://${this.server}:${this.port}/api/articoli/elimina/${codart}`);
  }

  updArticolo(articolo: Articoli) {
    return this.httpClient.put<ApiMsg>(`http://${this.server}:${this.port}/api/articoli/modifica`, articolo);
  }

  insArticoli(articolo: Articoli){
    return this.httpClient.post<ApiMsg>(`http://${this.server}:${this.port}/api/articoli/inserisci`, articolo);
  }
}
