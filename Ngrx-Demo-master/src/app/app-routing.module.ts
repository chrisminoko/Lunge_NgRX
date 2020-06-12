import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';


const routes: Routes = [
  {path:'',redirectTo:'/tutorials',pathMatch:'full'},
  {path:'icrement', component:MyCounterComponent},
  {path:'addtutorial', component:CreateComponent},
  {path:'tutorials',component:ReadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
