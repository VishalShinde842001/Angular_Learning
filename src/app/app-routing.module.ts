import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'tasks',component:TaskComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
