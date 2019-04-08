import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import {BMIS} from "../assets/mock-bmi";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  private a: number=10;
  private b: number=20;

   height: number=0;
   weight: number=0;
   bmi: number;
   bmis = BMIS;

  constructor(private http: HttpClient) { }

  checkbmi(): void{
    let url = 'http://localhost:8080/bmi/calculate/';

    this.http.post(url,
        {
            "height": this.height,
            "weight": this.weight
            
        })
        .subscribe(
            data => {
                console.log("POST Request is successful ", data);
                this.bmi = data["userBmi"];
            },
            error => {
                console.log("Error", error);
                this.bmi = 0;
            }
        );

  }


}
