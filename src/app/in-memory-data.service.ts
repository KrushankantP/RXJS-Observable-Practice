import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const retryData = [
      {
        id: 1,
        name: 'Krushankant Patel',
        email: "example@email.com",
        gender: "Male",
        phone: 7138052116,
        skills: "Angular,TypeScript, HTML"
      }
    ]
    return {retryData};
  }
}
