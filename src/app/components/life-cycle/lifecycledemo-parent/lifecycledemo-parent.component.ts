import { Component } from "@angular/core";



@Component({
    selector:'lifecycledemo-parent',
    templateUrl:'lifecycledemo-parent.component.html',
    styleUrls:['lifecycledemo-parent.component.css']
})
export class LifeCycleDemoParentComponent{

   message:string='';

}