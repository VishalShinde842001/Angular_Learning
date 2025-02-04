import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { ContainerComponent } from './component/container/container.component';

const routes: Routes = [
  {
    path:'',redirectTo:'container',pathMatch:'full'
  },
  {
    path:'container',component:ContainerComponent
  },
  {
    path:'user-list',component:UserListComponent
  },
  {
    path:'**',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
