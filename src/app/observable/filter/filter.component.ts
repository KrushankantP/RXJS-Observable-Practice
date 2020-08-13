import { Component, OnInit } from '@angular/core';
import {from} from 'rxjs';
import {filter, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  data;
  dataArr=[
    {id:1, name:'Krishna', Gender: 'Male'},
    {id:2, name:'Patel', Gender: 'Male'},
    {id:3, name:'shreya', Gender: 'Female'},
    {id:4, name:'Nirmani', Gender: 'Female'},
    {id:5, name:'Niramay', Gender: 'Male'},
    {id:6, name:'Gunatit', Gender: 'Male'},
    {id:7, name:'Akhshar', Gender: 'Male'},
    {id:9, name:'Any', Gender: 'Female'},
    {id:10, name:'Shruti', Gender: 'Female'},
    {id:11, name:'Nixal', Gender: 'Male'},
    {id:12, name:'Atmiyata', Gender: 'Male'},
    ]

  constructor() { }

  ngOnInit(): void {
    const source = from(this.dataArr)

    //Ex - 01 - Filter by length.

    source.pipe(
      filter(member => member.name.length > 6),
      toArray()
    )
      .subscribe(res=>{
        console.log(res);
        this.data=res;
      })
  }

}
