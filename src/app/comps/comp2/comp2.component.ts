import { Component, OnInit } from '@angular/core';
import {DesignUtilityService} from "../../appServices/design-utility.service";

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  userName:string;
  constructor(private _designUtility: DesignUtilityService) {
    this._designUtility.userName.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit(): void {

  }

  onChange(uname: HTMLInputElement) {
    console.log(uname.value);
    this._designUtility.userName.next(uname.value)
  }

}
