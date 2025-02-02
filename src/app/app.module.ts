import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdComponent } from './components/id-component/id-component';
import { ClassComponent } from './components/class-component/class-component';
import { AttributeComponent } from './components/attribute-component/attribute-component';
import { NormalComponent } from './components/normal-component/normal-component';
import { ComponentConsumerComponent } from './components/component-consumer.component/component-consumer.component';
import { BindingDemoComponent } from './components/binding-demo/binding-demo.component';
import { ChildComponent } from './components/parent/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { FormsModule } from '@angular/forms';
import { Child1Component } from './components/non-relatedcomponent/parent1/child1/child1.component';
import { Child2Component } from './components/non-relatedcomponent/parent1/child2/child2.component';
import { Parent1Component } from './components/non-relatedcomponent/parent1/parent1.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { ViewChildrenComponent } from './components/view-children/view-children.component';
import { Ui1Component } from './UI/ui1/ui1.component';
import { LifeCycleDemoParentComponent } from './components/life-cycle/lifecycledemo-parent/lifecycledemo-parent.component';
import { LifeCycleDemoChildComponent } from './components/life-cycle/lifecycledemo-parent/lifecycledemo-child/lifecycledemo-child.component';

@NgModule({
  declarations: [LifeCycleDemoParentComponent,LifeCycleDemoChildComponent,Ui1Component,ViewChildrenComponent,ViewChildComponent,ChildComponent,ParentComponent,Child1Component,Child2Component,Parent1Component,
    AppComponent,IdComponent,ClassComponent,AttributeComponent,NormalComponent,ComponentConsumerComponent,BindingDemoComponent,LifeCycleDemoParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
