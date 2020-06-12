import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import *as ScoreActions from '../../actions/scorebord.actions';
import {IncrementAway} from '../../actions/scorebord.actions';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers/scoreboard.reducers';
import { AppState, AppScore } from 'src/app/app.state';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {

  score:Observable<State[]>;
  
  constructor(private store:Store<AppScore>) {
    this.score=store.select('game');
   }

   homeScore(){
     return this.store.dispatch(new ScoreActions.IncrementHome());
   }
   awayScore(){
     return this.store.dispatch(new ScoreActions.IncrementAway());
   }
   resetScore(){
     return this.store.dispatch( new ScoreActions.Reset({home:0,away:0}));
   }



  ngOnInit(): void {
  }

}
