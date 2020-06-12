import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './reducers/counter.reducers';
import * as FromCounterReducer from './reducers/counter.reducers';
import * as scoreboardReducer  from './reducers/scoreboard.reducers';
import {Tutorialreducer} from './reducers/tutorial.reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import {ScoreboardModule} from './scoreboard.module';
import { ScoreBoardComponent } from './components/score-board/score-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    MyCounterComponent,
    ScoreBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tutorial:Tutorialreducer,
      count:counterReducer,
      game:scoreboardReducer.reducer
      
    })
    // ScoreboardModule
    // It is recommended to abstract a feature key string to 
    //prevent hardcoding strings when registering feature state and calling createFeatureSelector.
    // StoreModule.forFeature(FromCounterReducer.counterFeatureKey, FromCounterReducer.counterReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
