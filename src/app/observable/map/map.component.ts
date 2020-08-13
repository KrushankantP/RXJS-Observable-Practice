import { Component, OnInit } from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  //subscription
  sub1: Subscription;
  //Messages
  msg1;
  constructor() { }

  ngOnInit(): void {

    const broadCastVideos = interval(1000);

    // Ex - 01
    this.sub1 = broadCastVideos.pipe(
      map(data => 'Video ' + data)
    )
      .subscribe(res =>{
        //console.log(res);
        this.msg1 = res;
      })

      setTimeout(()=>{
        this.sub1.unsubscribe();
      },10000);

  }

}
