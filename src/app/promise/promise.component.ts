 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  promiseVAl:string
  dell={
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'black'
  }
  hp={
    brand:'Hp',
    hardDisk: '1 TB',
    color: 'silver'
  }
  notAvil={
    brand:'Not Available',
    status:'Failed'
  }

  constructor() { }

  DellAvailable(){
    return false
  }
  HpAvailable(){
    return true
  }


  ngOnInit(): void {
    //let buyLaptop = new Promise(function (resolve, reject){
    //resolve('Promise is resolved')
    //});

    let buyLaptop = new Promise((resolve, reject)=>{
      //resolve('Promise is resolved');
      //reject('promise is reject');
      if(this.DellAvailable()){
        return setTimeout(()=>{
          //resolve('Dell is Purchased')
          resolve(this.dell)
        }, 3000)
      }else if(this.HpAvailable()){
        return setTimeout(()=>{
          //resolve('Hp is purchased')
          resolve(this.hp)
        }, 3000)
      }else
        {
        return setTimeout(()=>{
         // reject('Laptop is not available on Store')
          reject(this.notAvil)
        }, 3000)
      }
    })

    buyLaptop.then(res=>{
      console.log('then code =>', res )
    }).catch(res=>{
      console.log('catch code=>', res)
    })
  }


}
