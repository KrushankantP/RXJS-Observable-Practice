import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PromiseComponent} from "./promise/promise.component";
import {ObservableComponent} from "./observable/observable.component";
import {ListComponent} from './observable/list/list.component';
import {FromEventComponent} from './observable/from-event/from-event.component';
import {IntervalComponent} from './observable/interval/interval.component';
import {OfFromComponent} from './observable/of-from/of-from.component';
import {ToArrayComponent} from './observable/to-array/to-array.component';


const routes: Routes = [
  {path: 'promise', component: PromiseComponent},
  {path: 'observable', component: ObservableComponent, children:[
      {path: '', component:ListComponent},
      {path: 'fromEvent', component:FromEventComponent},
      {path: 'interval', component:IntervalComponent},
      {path: 'of-from', component:OfFromComponent},
      {path: 'toArray', component:ToArrayComponent}

    ]},
  {path: '**', redirectTo:'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
