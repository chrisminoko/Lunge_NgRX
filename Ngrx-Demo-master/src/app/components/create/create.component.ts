import { Component, OnInit } from '@angular/core';
import {Store, State} from '@ngrx/store';
import {Tutorial} from '../../models/tutorial';
import {AppState} from '../../app.state'
import * as TutorialActions from '../../actions/tutorials.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store:Store<AppState>, private router:Router) { }

  addTutorial(name:string, url:string){
  this.store.dispatch(new TutorialActions.AddTutorial({name:name,url:url}));
  window.confirm("Tuorial aded");
  if(window.confirm){
     this.router.navigateByUrl('');
  }

  }

  ngOnInit(): void {
  }

}
