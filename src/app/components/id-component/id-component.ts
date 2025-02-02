//I am going to create this component in a way that this component can be used in html page like id attribute
//for example <p id="id-component"></p>
//Now this component is id component so can be used as id in component
//simply need to write selector starts with #
import { Component } from "@angular/core";

@Component({
    selector:'#id-component',
    templateUrl:'id-component.html',
    styleUrls:['id-component.css']
})
export class IdComponent{

}