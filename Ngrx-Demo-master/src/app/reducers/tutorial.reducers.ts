import { Tutorial } from '../models/tutorial';
import { Action } from '@ngrx/store';
import * as TutorialActions from './../actions/tutorials.action';

//Initial state of data
const InitialState: Tutorial = {
    name: 'Initial Tutotorial',
    url: 'http://google.com'
}

//create the actual reducer
export function Tutorialreducer(state: Tutorial[] = [InitialState], action: TutorialActions.Actions) {
    switch (action.type) {// we use this switch to determine what type of actions is being accessed
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];

        case TutorialActions.REMOVE_TUTORIAL:
           const index=action.payload;
            return [...state.slice(0,index),...state.slice(index+1)]
        default:
            return state;  // the defualt state defined
    }

}