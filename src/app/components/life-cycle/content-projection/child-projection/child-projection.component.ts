import { Component, ContentChild, ElementRef } from "@angular/core";


@Component({
    selector:'content-projection-child',
    templateUrl:'child-projection.component.html'
})
export class ChildProjectionDemoComponent{

    @ContentChild('justDemo') justDemo!:ElementRef;

    ngAfterContentInit(){
        console.log("JustDemo===>",this.justDemo.nativeElement);
    }


}