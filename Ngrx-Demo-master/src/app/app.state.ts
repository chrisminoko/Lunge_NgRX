import {Tutorial} from './models/tutorial';
import { State } from './reducers/scoreboard.reducers';

export interface AppState{
    readonly tutorial:Tutorial[];

    
}
export interface AppScore{
    readonly game:State[];
}