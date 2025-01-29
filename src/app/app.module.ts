import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { TaskDetailsComponent } from './components/task/task-details/task-details.component';
import { TaskService } from './services/task.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DynamicVhDirective } from './directives/dynamic-vh.component';
import { HttpClientModule } from '@angular/common/http';
import { ProviderService } from './services/provider.service';
import { TaskHeaderComponent } from './components/task/task-header/task-header.component';
import { HeaderDirective } from './directives/header-directive.component';


@NgModule({
  declarations: [
    AppComponent,TaskComponent,TaskListComponent,TaskDetailsComponent,HeaderComponent,FooterComponent,DynamicVhDirective,HeaderDirective,HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [TaskService,ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
