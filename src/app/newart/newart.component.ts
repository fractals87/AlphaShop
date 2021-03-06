import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articoli, Iva, FamAss, ApiMsg } from '../articoli/articoli.component';
import { ArticoliDataService } from '../services/data/articoli-data.service';

@Component({
  selector: 'app-newart',
  templateUrl: './newart.component.html',
  styleUrls: ['./newart.component.css']
})
export class NewartComponent implements OnInit {

  CodArt: string = '';
  articolo: Articoli;

  Conferma: string;
  Errore: string;

  IsModifica: boolean = false;

  Err403Msg : string = "Non sei autorizzato";

  apiMsg: ApiMsg;

  Iva: Iva;
  Cat : FamAss;

  constructor(private route:ActivatedRoute, private router:Router, private articoliService: ArticoliDataService) { }
  ngOnInit() {

    //Inizializziamo l'articolo
    this.articolo = new Articoli("","","",0,0,0,"1",new Date(), 1, 22, 1);

    this.CodArt = this.route.snapshot.params['codart'];

    //Otteniamo i dati dell'Iva
    this.articoliService.getIva().subscribe(
      response => {
        this.Iva = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )

    //Otteniamo i dati della famiglia assortimento
    this.articoliService.getCat().subscribe(
      response => {

        this.Cat = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
    
    if(this.CodArt!="-1"){
      this.IsModifica = true;
      //Otteniamo i dati dell'articolo
      this.articoliService.getArticoliByCodArt(this.CodArt).subscribe(
        response => {

          this.articolo = response;
          console.log(this.articolo); 
        },
        error => {
          console.log(error);
        }
      )
    }else{
      this.IsModifica = false;
    }
  }

  abort(){
    this.router.navigate(['articoli',this.CodArt]);
  }

  salva() {
    this.Conferma = '';
    this.Errore = '';
    
    console.log(this.articolo);
    if(this.IsModifica){    
      this.articoliService.updArticolo(this.articolo).subscribe(
        response => { 
          console.log(response);
          this.apiMsg = response;
          this.Conferma = this.apiMsg.message;
          console.log(this.Conferma);

          this.router.navigate(['articoli',this.articolo.codArt]);
        },
        error => {
          console.log(error);
          this.apiMsg = error.error;
          this.Errore = (error.status== 403) ? this.Err403Msg :  this.apiMsg.message;
          
          console.log(this.Errore);    
        }
      )
    }else{
      this.articoliService.insArticoli(this.articolo).subscribe(
        response => { 
          console.log(response);
          this.apiMsg = response;
          this.Conferma = this.apiMsg.message;
          console.log(this.Conferma);
        },
        error => {
          console.log(error);
          this.apiMsg = error.error;
          this.Errore = (error.status== 403) ? this.Err403Msg :  this.apiMsg.message;
          console.log(this.Errore);    
        }
      )
    }
  }

}
