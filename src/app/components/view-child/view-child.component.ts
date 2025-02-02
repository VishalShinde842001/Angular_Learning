import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, ViewChild } from "@angular/core";


@Component({
    selector:'view-child-demo',
    templateUrl:'view-child.component.html'
})
export class ViewChildComponent implements AfterViewChecked,OnChanges,OnInit{



    constructor(private cd:ChangeDetectorRef){

    }
    @ViewChild('templateRefernce',{static:false,read:ElementRef}) templateReference1!:ElementRef;


    ngOnChanges(){
        console.log("This is just ngOnChages which is angular first lifecylce hook")
        console.log("Current Object====>",this.templateReference1.nativeElement)
    }
    ngOnInit(){
        this.cd.detectChanges();
        console.log("This is just ngOnInit which is angular second lifecylce hook")
        console.log("Current Object====>",this.templateReference1.nativeElement)
       
    }
    ngAfterViewChecked(){
        //This is just ngAfterViewChecked lifecycle hook which will trigger every time after there is change in any
        //of ViewChild in given component
        console.log("This is just ngAfterViewChecked lifecycle hook")
        console.log("Current Object=====>",this.templateReference1.nativeElement)
    }





}