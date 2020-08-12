import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {

  techStatus;
  techStatus2;
  subs2: Subscription;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    //Ex -01 (Manual)
    const cusObs1 = Observable.create(observer =>{
     setTimeout(()=>{
       observer.next('Angular');
     },1000)

      setTimeout(()=>{
        observer.next('TypeScript');
      },2000)

      setTimeout(()=>{
        observer.next('HTML and CSS ');
        observer.complete();
      },3000)

      setTimeout(()=>{
        observer.next('JavaScript');
        //observer.error(new Error('Limit Exceed'))
      },4000)

      setTimeout(()=>{
        observer.next('Jquery');
      },5000)

    })

    cusObs1.subscribe(res=>{
     this._designUtility.print(res, 'elContainer')
    },
      (error)=>{
      this.techStatus = 'error';
      },

      ()=> {
      this.techStatus = 'completed';
    })

    //subscription(data, error, completion)


    //Ex- 02 (custom Interval)
    const Arr2= ['Angular', 'JavaScript', 'Html', 'css', 'TypeScript']
    const cusObs2 = Observable.create(observer => {
      let count =0;
      setInterval(()=>{
        observer.next(Arr2[count]);

        if(count >=2){
          observer.error('Error emit')
        }

        if(count >=5){
          observer.complete()
        }
        count++;
      }, 1000)
    })

  this.subs2 = cusObs2.subscribe(res =>{
     this._designUtility.print(res, 'elContainer2')
    },
    (error)=>{
      this.techStatus2 = 'error';
    },

    ()=> {
      this.techStatus2 = 'completed';
    })

    //Ex - 03 (Random Names)
  }

  ngOnDestroy(){
    this.subs2.unsubscribe()
  }


}
