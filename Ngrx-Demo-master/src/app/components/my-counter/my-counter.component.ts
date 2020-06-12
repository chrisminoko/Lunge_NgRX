import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as counterAction from '../../actions/counter.actionts';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {

    this.count$ = store.pipe(select('count'));
    // this.count$=store.select('count')
  }
  increment() {
    this.store.dispatch(counterAction.increment());
  }
  decrement() {
    this.store.dispatch(counterAction.decrement());
  }
  reset() {
    this.store.dispatch(counterAction.reset());
  }

  ngOnInit(): void {
  }

}
