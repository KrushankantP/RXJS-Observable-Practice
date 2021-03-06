import { Component, OnInit } from '@angular/core';
import {interval, Subscription, timer} from 'rxjs';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  obsMsg;
  display:boolean=false;
  videoSubscription: Subscription;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    //const broadcastVideos =interval(1000);

    //timer(delay, interval)
    const broadcastVideos = timer(5000, 1000);

    this.videoSubscription =broadcastVideos.subscribe(res=>{
      this.display=true;
      console.log(res);
      this.obsMsg = 'Video ' + res;
      this._designUtility.print(this.obsMsg, 'elContainer')
      this._designUtility.print(this.obsMsg, 'elContainer2')
      this._designUtility.print(this.obsMsg, 'elContainer3')

      if(res >=5){
        this.videoSubscription.unsubscribe()
      }
    })
  }

}
