import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector:'child1-component',
    templateUrl:'child1.component.html',
    styleUrls:['child1.component.css']
})
export class Child1Component{

    @Output() dataEmitterFromChild1:EventEmitter<string>=new EventEmitter<string>();


    passDataToParent(event:any){
        this.dataEmitterFromChild1.emit(event.target.value)
    }


}