import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  exclusive = new Subject<boolean>();
  //For BehaviorSubject we can define Initial value like here we have defined but Subject don't accept initial value.
  userName = new BehaviorSubject<string>('Krushankant');

  constructor() { }
  print(val, containerId){
    let el =document.createElement('li');
    el.innerText =val;
    document.getElementById(containerId).appendChild(el)
  }
}
