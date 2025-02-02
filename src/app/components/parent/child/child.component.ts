import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";



@Component({
    selector: 'child-component',
    templateUrl: 'child.component.html',
    styleUrls: ['child.component.css']

})
export class ChildComponent {



    //Here i used @Input decorator which is used to pass from parent class to child class or simply from parent 
    //To child component if you try to access the value of @Input decorator in consturctor we will neven able to get updated @Input vlaue you will get local value 
    //And you will not able to access the updated value
    //but after consturctor ngOnChages lifecycle hooks runs after that ngOnInit ,ngDoCheck, ngAfterContentInit,ngAfterContentChecked,ngAfterViewInit,ngAfterViewChecked,ngOnDstry
    //At ngOnChanges all @Input and @Output value will updated
    //SO if any time you wanted to access the updated value of @Input decoratored variable then you need to do it inside ngOnChages
    //ngOnChages method will trigger every time when there is change @Input or @Output decorated values
    //We can get SimpleChanges parameter from where we can know the previous value of @Input decorated and newly updated also
    //If in case any scenario where you want the non updated value on Input decorated variable then you can simply
    @Input() dataFromParentThroughInput:string='';

    @Output()
    eventToPassDataToParent:EventEmitter<string>=new EventEmitter<string>();

    dataFromChildToParentThroughOutput:string='';

    whenDataFromChildToParentThroughOutputChanges(){
        this.eventToPassDataToParent.emit(this.dataFromChildToParentThroughOutput)
    }
  

}