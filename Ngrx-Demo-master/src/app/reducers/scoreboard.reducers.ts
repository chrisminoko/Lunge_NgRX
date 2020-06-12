import {Action, createReducer,on} from '@ngrx/store';
import * as Scoreboard from '../actions/scorebord.actions';

//define the shape of the piece of state using an interface
export interface State{
    home:number;
    away:number;
}

//setting the initial values of the state
export const InitialState:State={
    home:0,
    away:0
};

//create a reducer function that handles the state transition immutably
// const scoreboardReducer=createReducer(
//     InitialState,
//     on(ScorebiardActions.homeScore, state=>({...state, home:state.home+1})),
//     on(ScorebiardActions.awayScore, state=>({...state, away:state.away+1})),
//     on(ScorebiardActions.resetScore, state=>({home:0,away:0})),
//     on(ScorebiardActions.setScores, (state,{game})=>({home:game.home, away:game.away}))
// );
// export function reducer(state:State | undefined, action:Action){
    
//     return scoreboardReducer(state,action);
// }
// export const scoreboardFeatureKey = 'game';

export function reducer(
    state = InitialState,
    action: Scoreboard.ActionsUnion
  ): State {
    switch (action.type) {
      case Scoreboard.ActionTypes.IncrementHome: {
        return {
          ...state,
          home: state.home + 1,
        };
      }
  
      case Scoreboard.ActionTypes.IncrementAway: {
        return {
          ...state,
          away: state.away + 1,
        };
      }
  
      case Scoreboard.ActionTypes.Reset: {
        return action.payload; // typed to { home: number, away: number }
      }
  
      default: {
        return state;
      }
    }
  }
