import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";
import {LoadingBarService} from "@ngx-loading-bar/core";

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements AfterViewInit {

  @ViewChild('myInput') myInput:ElementRef;
  reqData = null;

  @ViewChild('myInput2') myInput2:ElementRef;
  reqData2 = null;
  constructor(private _loadingBar: LoadingBarService) { }


  ngAfterViewInit(): void {

    // Ex- 01 debounceTime
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(2000)
    )

    searchTerm.subscribe(res => {
      console.log(res);
      this.reqData =res;
      this._loadingBar.start();

      setTimeout(()=>{
        this.reqData = null;
        this._loadingBar.stop();
      }, 2000);
    })

    // Ex- 02 DistinctUntilChanged
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(2000),
      distinctUntilChanged()
    )

    searchTerm2.subscribe(res => {
      console.log(res);
      this.reqData2 =res;
      this._loadingBar.start();

      setTimeout(()=>{
        this.reqData2 = null;
        this._loadingBar.stop();
      }, 2000);
    })
  }

}
