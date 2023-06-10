import { Component, OnInit } from '@angular/core';
import { ApiRickService } from 'src/app/services/api-rick.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  infoCharacters: any[]= [];
  misteryCharacters: any[] = [];
  numberRandom : number = 0;
  indice : number = 0;
  valor:boolean = false;
  constructor(private api:ApiRickService) { 
  }

  newGame(){
    this.misteryCharacters = [];
    this.showCharacters();
  }
  
  showCharacters(){
    for (let i = 0; i < 3; i++) {
      this.api.getCharacters(this.randomCharacters(1,826)).subscribe((data)=>{
        this.misteryCharacters.push(data);
      });
    }
    this.indice=this.randomCharacters(0,3);
    this.valor = true;
  }

  randomCharacters(min:number,max:number){
    return (Math.floor(Math.random() * (max - min + 1 ) + min));
       
  }

}
