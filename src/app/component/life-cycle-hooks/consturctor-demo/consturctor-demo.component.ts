import { Component, Input } from "@angular/core";

@Component(
    {
        selector:'constructor-demo',
        templateUrl:'constructor-demo.component.html'
    }
)

export class ConstructorDemoComponent{

    @Input() message:string='local string'

    constructor(){
        console.log("message==>",this.message)
    }

}