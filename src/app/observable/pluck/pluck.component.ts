import { Component, OnInit } from '@angular/core';
import {from} from 'rxjs';
import {pluck, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  data;
  data2;
  users=[
    {
      name:'Krishna',
      skills: 'Angular',
      job:{
        title:'frontend Developer',
        exp: '10 Years'
      }
    },
    {
      name:'Patel',
      skills: 'HTML, CSS',
      job:{
        title:'HTML CSS Developer',
        exp: '11 Years'
      }
    },

    {
      name:'Nixal',
      skills: 'TypeScript',
      job:{
        title:'Typescript Developer',
        exp: '10 Years'
      }
    },

    { name:'Niramay',
      skills: 'JavaScript',
      job:{
        title:'JavaScript Developer',
        exp: '12 Years'
      }
    }
  ]



  constructor() { }


  ngOnInit(): void {

    //Ex - 01 Pluck by Property

    from(this.users).pipe(
      //map(data=> data.name), OR
      pluck('name'),
      toArray()
    )
      .subscribe(res=>{
        console.log(res);
        this.data = res;
      })


    //Ex - 02 Pluck by nested Property
    from(this.users).pipe(
      pluck('job', 'title'),
      toArray()
    )
      .subscribe(res=>{
        console.log(res);
        this.data2 = res;
      })
  }

}
