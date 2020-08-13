import { Component, OnInit } from '@angular/core';
import {from} from 'rxjs';
import {pluck, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  users=[
    {name:'Krishna', skills: 'Angular'},
    {name:'Patel', skills: 'HTML, CSS'},
    {name:'Nixal', skills: 'TypeScript'},
    {name:'Niramay', skills: 'JavaScript'}
  ]
  data;

  constructor() { }


  ngOnInit(): void {
    from(this.users).pipe(
      //map(data=> data.name), OR
      pluck('name'),
      toArray()
    )
      .subscribe(res=>{
        console.log(res);
        this.data = res;
      })

  }

}
