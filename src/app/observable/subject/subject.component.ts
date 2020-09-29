import {Component, OnDestroy, OnInit} from '@angular/core';
import {DesignUtilityService} from "../../appServices/design-utility.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    this._designUtility.exclusive.next(true);
  }

  ngOnDestroy() {
    this._designUtility.exclusive.next(false);
  }

}
