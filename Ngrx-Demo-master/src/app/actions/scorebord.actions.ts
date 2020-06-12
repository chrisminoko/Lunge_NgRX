// import { createAction, props, createReducer } from '@ngrx/store';
// import { initialState } from '../reducers/counter.reducers'; 
// import {Game} from '../models/gamescore';
 
// export const homeScore=createAction('[Scoreboard Page] Home Score');
// export const awayScore=createAction('[Scoreboard Page] Away Score');
// export const resetScore=createAction('[Scoreboard Page] Score Reset');
// export const setScores= createAction('[Scoreboard Page] Set Scores', props<{game: Game}>());


import { Action } from '@ngrx/store';

export enum ActionTypes {
  IncrementHome = '[Scoreboard Page] Home Score',
  IncrementAway = '[Scoreboard Page] Away Score',
  Reset = '[Scoreboard Page] Score Reset',
}

export class IncrementHome implements Action {
  readonly type = ActionTypes.IncrementHome;
}

export class IncrementAway implements Action {
  readonly type = ActionTypes.IncrementAway;
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;

  constructor(public payload: { home: number; away: number }) {}
}

export type ActionsUnion = IncrementHome | IncrementAway | Reset;
