import { Component } from "@angular/core";

//In Angular there are mainly two types of binding where one of them is one way binding and another is two way binding
//One way binding simply means sending data from component class to view template or sending data from view template to component class
//In two way binding data can transfer from component class to view template and also from view template to component class
//One way binding have two types sending data from view template to component class by using event binding or sending data from componetn class to
//View Template by using Property binding or String interpolation

@Component({
    selector:'binding-demo',
    templateUrl:'binding-demo.component.html',
    styleUrls:['binding-demo.component.css']
})
export class BindingDemoComponent {
    title:string='';

    changeTitle(event:any){
        this.title=event.target.value;
    }
}