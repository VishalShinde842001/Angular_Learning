import { Component } from "@angular/core";

//This is simply a class component simply while creating class component selector name must be started with .
//And this component cant be loaded by norma way like <class-component></class-component>
//but to load this we simply need to use it as class='class-component' in HTML
@Component({
    selector:'.class-component',
    templateUrl:'class-component.html',
    styleUrls:['class-component.css']
})
export class ClassComponent{

}