import { Component, Input } from "@angular/core";



@Component(
    {
        selector: 'parent-component',
        templateUrl: 'parent.component.html',
        styleUrls: ['parent.component.css']
    }
)
export class ParentComponent {

  
    dataFromChild!:string;

    dataFromParent!:string;

    getDataFromChild(event:any){
        this.dataFromChild=event;
    }
   
}