import { Component, Input } from "@angular/core";


@Component({
    selector:'child2-component',
    templateUrl:'child2.component.html',
    styleUrls:['child2.component.css']
})
export class Child2Component{

    @Input()
    dataFromChild1:string='';
}