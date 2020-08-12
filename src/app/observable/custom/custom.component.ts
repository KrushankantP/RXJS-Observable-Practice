import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  techStatus;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    //Ex -01 (Manual)
    const cusObs1 = Observable.create(observer =>{
     setTimeout(()=>{
       observer.next('Angular');
     },1000)

      setTimeout(()=>{
        observer.next('TypeScript');
      },2000)

      setTimeout(()=>{
        observer.next('HTML and CSS ');
      },3000)

      setTimeout(()=>{
        observer.next('JavaScript');
        //observer.error(new Error('Limit Exceed'))
      },4000)

      setTimeout(()=>{
        observer.next('Jquery');
        observer.complete();
      },5000)

    })

    cusObs1.subscribe(res=>{
     this._designUtility.print(res, 'elContainer')
    },
      (error)=>{
      this.techStatus = 'error';
      },

      ()=> {
      this.techStatus = 'completed';
    })
  }

}
