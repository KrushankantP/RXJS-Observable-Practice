import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {delay, retryWhen, scan} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RxjsOperatorService {

  private RetryUrl ='api/retryData';
  public RetryStatus ='';
  constructor(private _http: HttpClient) { }

  getRetryData(): Observable<any>{
    return this._http.get<any>(this.RetryUrl)
      .pipe(
        //retry(2);
        retryWhen(err => err.pipe(
          delay(3000),
          scan((retryCount) =>{
            if(retryCount >=5){
              throw err;
            }else{
              retryCount = retryCount + 1 ;
              console.log(`retryCount => ${retryCount}`);
              this.RetryStatus = `Retrying Attempt #${retryCount}`;
              return retryCount
            }
          }, 0)
        )));
  };
}
