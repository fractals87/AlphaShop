import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from '../services/data/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //messaggio = "Saluti sono il componente welcome dalla classe"
  saluti = 'Benvenuti nel sito AlphaShop';
  titolo02 = 'Seleziona gli articoli da acquistare';
  messaggio = '';
  userid = ''

  constructor(private route:ActivatedRoute, private salutiSrv: SalutiDataService) { }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['userid']
    //console.log(this.messaggio);
  }

  getSaluti(){
    //console.log(this.salutiSrv.getSaluti());
    this.salutiSrv.getSaluti().subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    );
  }

  handleResponse(response){
    this.messaggio = response;
  }
  handleError(error){
    console.log(error);
    this.messaggio = error;
  }
}
