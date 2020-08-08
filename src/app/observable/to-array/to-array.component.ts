import { Component, OnInit } from '@angular/core';
import {from, interval, of, Subscription} from 'rxjs';
import {take, toArray} from 'rxjs/operators';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  sourceSub: Subscription;
  users = [
    { name: 'patel', skill:'Angular' },
    { name: 'Krushankant', skill: 'JavaScript' },
    { name: 'Krishna', skill:'TypeScript'},
    { name: 'Atmiayata', skill:'HTML, CSS'}
  ]
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    //Ex - 1

    const source =interval(1000) // this will emit numbers one by one after 1 seconds.
    this.sourceSub = source.pipe(
      take(5), // this will take only five number.
      toArray() // here it will convert that number into an Array.
    )
      .subscribe(res=>{
        console.log('Number Array => ', res);
        this._designUtility.print(res, 'elContainer')
      })

      // if(res >= 8){
      //   this.sourceSub.unsubscribe()
      // }

    //Ex - 02 => to convert array as an Observable Stream we use From() Operators.
              // and than those data again converted into the array and displayed.

    const source2 = from(this.users);
    source2.pipe(toArray())
      .subscribe(usersRes =>{
      console.log('Array of Object => ', usersRes);
        this._designUtility.print(usersRes, 'elContainer2')
    })

    //Another type of Observable Stream data converted into the "Array".
    const source3 = of('patel','Krushankant', 'Krishna', 'Atmiyata');
    source3.pipe(toArray())
      .subscribe(res=>{
      console.log('String Array => ', res);
        this._designUtility.print(res, 'elContainer3')
    })
  }

}
