import { Component, OnInit } from '@angular/core';
import {DesignUtilityService} from "../../appServices/design-utility.service";

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  userName:string = 'Krushankant'
  constructor(private _designUtility: DesignUtilityService) {
    this._designUtility.userName.subscribe(res => {
      this.userName =res;
    })
  }

  ngOnInit(): void {

  }

  onChange(uname: HTMLInputElement) {
    console.log(uname.value);
    this._designUtility.userName.next(uname.value)
  }
}
