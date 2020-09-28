import { Component, OnInit } from '@angular/core';
import {RxjsOperatorService} from "../../appServices/rxjs-operator.service";

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  person;
  fetching: boolean = false;
  status = 'No Data';

  constructor(public _rxjsOperatorService: RxjsOperatorService) { }



  ngOnInit(): void {

  }

  fetchDetails(){
    this.fetching =true;
    this.status = 'Fetching Data....';
    this._rxjsOperatorService.getRetryData().subscribe(
      (resData)=>{
        console.log(resData);
        this.person = resData;
        this.status = 'Data Fetched';
        this.fetching = false;
      },
      (err) =>{
        console.log(err);
        this.status ='Problem Fetching Data';
        this.fetching =false;
      }
    )
  }
}
