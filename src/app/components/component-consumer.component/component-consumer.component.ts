import { Component } from "@angular/core";


///This Component is simply create to show how i can render the multiple types of components 
//Id component , class component attribute component , normal component
//To load id component use like this <div id='id-component-name'></div>
//To load class component use like this <div class='class-component-name'></div>
//To load attribute component use like this <div attribute-component-name></div>
//To load normal component you simply need to use component as html tag <normal-component-name></normal-component-name>

@Component({
    selector:'component-consumer',
    templateUrl:'component-consumer.component.html'
})
export class ComponentConsumerComponent{

}