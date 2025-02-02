import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";



@Component({
    selector: 'lifecycledemo-child',
    templateUrl: 'lifecycledemo-child.component.html',
    styleUrls: ['lifecycledemo-child.component.css']
})

export class LifeCycleDemoChildComponent implements OnChanges, OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {

    @Input() message: any = '';

    constructor() {
        console.log("Message In constructor==>", this.message);
    }
    //This is the first lifecycle hook of angular
    //All Input bound properties are updated before this lifecycle hook
    //It will trigger every time after there is change in Input bound properties
    //But in case if input bound property is of type object then it might not trigger becuase
    //In case of object memory location will not change so 
    //It has one pararmter oftypes SimpleChanges which have all the data about what was previous value
    //of input bound property and what is changed
    ngOnChanges(simpleChange: SimpleChanges) {
        console.log("Message In ngOnChanges==>", this.message);
    }
    //ngOnInit is triggerd after ngOnChanges , this is 2nd lifecycle hook
    //It will trigger only once if first change detection done
    //differnce between ngOnChanges and ngOnInit is that ngOnInit will trigger only once 
    //while ngOnChanges will trigger multiple times as soon as Input bound property changes
    //Inside ngOnInit we are not able to access the updated properties of ViewChild , content child , and etc
    //Only Input bound properties are there
    ngOnInit() {
        console.log("ngOnInit triggered")
    }
    //This lifecycle hook will trigger every time when there is any event occurs 
    //Means it will trigger after every change detection
    ngDoCheck(){
        console.log("ngDoCheck triggerd")
    }
    //ngAfterContentInit is 4th lifecycle hook and this will trigger after first change detection after ngDoCheck
    //If will trigger only once when there is first change detection happens
    //Just before this trigger all proejcted content is initialized in view and also values of ContentChild and 
    //ContenctChildren are updated at the moment
    //It will trigger only once and from here we can access ContentChild bound proeprties but we cant access
    //ViewChild bound properties here becuase till here complete View is not initialized
    ngAfterContentInit(){
        console.log("ngAfterContentInit triggered")
    }


    // ngAfterContentChecked() is triggered after ngAfterContentInit() during the first change detection 
    // and then runs on every change detection cycle, 
    // regardless of whether the projected content has changed or not
    //It will run after every change detection
    ngAfterContentChecked(){
        console.log("ngAfterContentChecked triggered")
    }


    //This is called after ngAfterContentChecked on first change detection only after that this will not trigger
    //Here now complete view is initialized
    //And here you can access ViewChild ViewChildren
    ngAfterViewInit(){
        console.log("ngAfterViewInit triggered")
    }

    
    ngAfterViewChecked(){
        console.log("ngAfterViewChecked triggered")
    }
}
