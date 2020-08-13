import { Component, OnInit } from '@angular/core';
import {from, interval, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  //subscription
  sub1: Subscription;
  sub2: Subscription;
  //Messages
  msg1;
  msg2;
  constructor(private _designUtility : DesignUtilityService) { }

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


    // Ex - 02

    this.sub2 = broadCastVideos.pipe(
      map(data => data * 3)
    )
      .subscribe(res =>{
        //console.log(res);
        this.msg2 = res;
      })

    setTimeout(()=>{
      this.sub2.unsubscribe();
    },10000);


    // Ex - 03

    const members = from([
      {id:1, name:'Krishna'},
      {id:2, name:'Patel'},
      {id:3, name:'Atmiyata'},
      {id:4, name:'Nixal'},
      {id:5, name:'Niramay'},
      {id:6, name:'Gunatit'},
      {id:7, name:'Akhshar'},
      {id:8, name:'Yogi'},
    ])

    members.pipe(map(data=> data.name))
    .subscribe(res=>{
      console.log(res);
      this._designUtility.print(res, 'elContainer')
    })
  }

}
