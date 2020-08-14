import { Component, OnInit } from '@angular/core';
import {from, fromEvent, interval, timer} from 'rxjs';
import {map, take, takeLast, takeUntil} from 'rxjs/operators';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  randomNames = ['Krishna', 'Patel', 'Nishan', 'Nixal',  'Niramay','Nishtha', 'Gunatit', 'Kishan', 'Nirbhayta']

  constructor(private _designUtility:  DesignUtilityService) { }

  ngOnInit(): void {

    const nameSource = from(this.randomNames) //Convert Array into the stream

    //Ex - 01 | Take(5)

  nameSource.pipe(
    take(5)  // Take 5 values from the top.
  )
    .subscribe(res=>{
    console.log(res);
    this._designUtility.print(res, 'elContainer')
  })

    //Ex - 02 | TakeLast(5)

    nameSource.pipe(
      takeLast(5) // Take last 5 values from the Last
    )
      .subscribe(res=>{
        console.log(res);
        this._designUtility.print(res, 'elContainer2')
      })

    //Ex - 03 | TakeUntil(Condition)

 const source = interval(1000);
    let condition1 = timer(6000);
    let condition2 = fromEvent(document,'click');
    source.pipe(
      map(res=> 'Number ' + res),
      takeUntil(condition2)
    )
      .subscribe(res=>{
        console.log(res);
        this._designUtility.print(res, 'elContainer3')
      })
  }

}
