import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './component/container/search/search.component';
import { ProductListComponent } from './component/container/product-list/product-list.component';
import { ContainerComponent } from './component/container/container.component';
import { InputFieldDirective } from './directives/InputFieldDirective/InputFieldDirective';
import { FormsModule } from '@angular/forms';
import { ViewChildrenDemo } from './component/view-children-demo/view-children-demo.component';
import { ConstructorDemoComponent } from './component/life-cycle-hooks/consturctor-demo/consturctor-demo.component';
import { AllHooksComponent } from './component/life-cycle-hooks/all-hooks/all-hooks.cpmonent';
import { HookChildComponent } from './component/life-cycle-hooks/all-hooks/child/child.component';
import { ContentProjectionDemoChild } from './component/life-cycle-hooks/content-project-demo/content-projecion-demo-child/content-projectchild.component';
import { ContentProjectionDemoComponent } from './component/life-cycle-hooks/content-project-demo/content-projection.component';
import { HighlightDirective } from './directives/HighlightDirective/HighlightDirective';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

@NgModule({
  declarations: [HighlightDirective,NotFoundComponent,
    AppComponent, SearchComponent, ProductListComponent, ContainerComponent, InputFieldDirective, ViewChildrenDemo, ConstructorDemoComponent, AllHooksComponent, HookChildComponent,ContentProjectionDemoChild,ContentProjectionDemoComponent,UserListComponent,UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
