import { Component, OnInit } from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  myColor;
  //1. Tap Operator is useful to see that, what kind of data we will get,
  // after performing some operation such as Map, Filter, toArray and many others.
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {



    //Ex-01
    const Arr = ['Krishna', 'Patel', 'Nishan', 'Nixal', 'Kishan', 'Alex']
    const source =interval(1500);

    let obsSubscription: Subscription;

    obsSubscription =  source.pipe(
      tap(res => {
        //console.log('tap before => :' +res);
        if(res == 5){
          obsSubscription.unsubscribe()
        }
      }),
      map(res=>Arr[res]),
      //tap(res=> console.log('tap after => ' +res))
    )
      .subscribe(res=>{
        //console.log(res);
        this._designUtility.print(res,'elContainer')
      })

    //Ex-02
    const colorArr = ['Red', 'Green', 'Yellow', 'Purple', 'Violet', 'Blue', 'Orange']


    let obsSubscription2: Subscription;

    obsSubscription2 =  source.pipe(
      tap(res => {
        this.myColor = colorArr[res];
          console.log('tap before => :' +res);
          if(res == 7) {
            obsSubscription2.unsubscribe()
          }
      }),
      map(res=>colorArr[res]),

    )
      .subscribe(res=>{
        console.log(res);
        this._designUtility.print(res,'elContainer2')
      })
  }

}
