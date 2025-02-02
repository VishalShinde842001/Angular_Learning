import { Component } from "@angular/core";


//To create attribute component you simply need to maintain the name of selector inside the [] square bracket
//And to use this in view template you simply need to maintain this <div aatribute-component></div>

@Component({
    selector:'[attribute-component]',
    templateUrl:'attribute-component.html',
    styleUrls:['attribute-component.css']
})
export class AttributeComponent{

}