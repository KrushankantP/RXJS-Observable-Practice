import { Component, OnInit } from '@angular/core';
import {DesignUtilityService} from '../../appServices/design-utility.service';
import {from, of} from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  obsMsg;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    //OF

    const Obs1 = of('patel', 'patel2', 'patel3');
    Obs1.subscribe(res=> {
      console.log(res);
      this._designUtility.print(res, 'elContainer')
    })

    const Obs2= of({a: 'Patel', b:'Patel2', c:'Patel3'});
    Obs2.subscribe(res=>{
      this.obsMsg = res;
      console.log('obsMSg =>', res);
    })


    // From - Array => Whenever we want to use Array as Observable stream  we use From() operator.
      let Arr = ['Atmiyata','Shuhardbhav','Ekta']
    const Obs3= from(Arr);
    Obs3.subscribe(res=>{
      console.log('From Array =>', res);
      this._designUtility.print(res, 'elContainer3')
    })

    // From - Promise

    const promise = new  Promise(resolve =>  {
      setTimeout(()=>{
        resolve('Promise Resolved')
      }, 3000);
    })

    const Obs4 = from(promise);
    Obs4.subscribe(res=>{
      console.log('from Promise =>', res);
      this._designUtility.print(res, 'elContainer4')
    })

    //From - String
    const Obs5 = from('Welcome to Atmiyata');
    Obs5.subscribe(res=>{
      console.log('from String =>', res);
      this._designUtility.print(res, 'elContainer5')
    })
  }

}
