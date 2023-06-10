import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRickService {
  baseUrl: string = "https://rickandmortyapi.com/api";

  constructor(private http:HttpClient) { 
  }
  
  getCharacters(id:number){
    //https://rickandmortyapi.com/api/charater
    return this.http.get<any>(`${this.baseUrl}/character/${id}`);
  }


}
