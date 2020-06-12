import {Injectable} from '@angular/core';
import {Tutorial} from '../models/tutorial';
import {Action, ActionReducer} from '@ngrx/store';

export const ADD_TUTORIAL='[TUTORIAL], Add'; //this is the type 1st part of an action
export const REMOVE_TUTORIAL='[TUTORIAL], Remove';

export class AddTutorial implements Action{
    readonly type= ADD_TUTORIAL;

    constructor(public payload:Tutorial){}  //the constructor will allow us to pass data/payload
}
export class RemoveTutorial implements Action{
    readonly type= REMOVE_TUTORIAL;

    constructor(public payload:number){}  //the constructor will allow us to pass data/payload
}

export type Actions =AddTutorial | RemoveTutorial
