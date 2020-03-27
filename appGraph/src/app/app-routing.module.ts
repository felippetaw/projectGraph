import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { GraphComponent } from './graph/graph.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'   
  },
  {
    path:'home', component:FormComponent
  },
  {
    path:'graph', component:GraphComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
