import { Component } from "@angular/core";



@Component(
    {
        selector:'content-projection-demo-parent',
        templateUrl:'content-projection.component.html'
    }
)
export class ContentProjectionDemoComponent {

    message:string=''

    //In this html file I will simply load the child component and pass some data through content proection to child

}
