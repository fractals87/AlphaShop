import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { AuthappService } from '../services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = 'Paolo'
  password ="Password11"
  auth = null;
  errorMsg = ""
  successMsg = ""

  constructor(private route : Router, private Authapp: AuthappService) { }

  ngOnInit(): void {
  }

  gestAut(){
    //console.log(this.userid);

    this.Authapp.autenticaService(this.userid, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.auth = true;
          this.route.navigate(['welcome', this.userid]);
        },
        error => {
          console.log(error);
          this.auth = false;
        }
      )
    }

    /*
    AUTENTICA HARD CODE
    if(this.Authapp.autentica(this.userid, this.password)){
      this.auth = true;
      this.route.navigate(["welcome", this.userid]);
    }else{
      this.auth = false;
      this.errorMsg = "User o password non corretti"
    }
    */

    /*
    if(this.userid === "Paolo" && this.password === "Password1!"){
      this.auth = true;
      this.route.navigate(["welcome", this.userid]);
      //this.successMsg ="Benenuto " + this.userid;
    }else{
      this.auth = false;
      this.errorMsg = "User o password non corretti"
    }
    */
}
