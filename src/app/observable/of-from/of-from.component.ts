import { Component, OnInit } from '@angular/core';
import {DesignUtilityService} from '../../appServices/design-utility.service';
import {of} from 'rxjs';

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
  }

}
