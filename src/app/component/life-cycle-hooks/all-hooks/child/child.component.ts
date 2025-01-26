import { Component, OnChanges, Input, SimpleChanges, OnInit, DoCheck, ContentChild, AfterContentInit, ElementRef, AfterContentChecked } from "@angular/core";


@Component(
    {
        selector: 'hook-child',
        templateUrl: 'child.component.html'
    }
)
export class HookChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked {
    @Input() message: string = 'local string';

    isLoggedIn:boolean=false;
    @ContentChild('text1') text1!: ElementRef;
    //As  we try to access message inside consturctor then even if you send data in message from parent component even will not able to see updated value 
    constructor() {
        //Here you can see the value of message from local and not coming from parent becuase when constructor run at that time @Input value is not updated
        //This value will update before ngOnChanges() lifecylce hook
        console.log("Inside the Consturctor")
        console.log("Message===>", this.message);

    }


    //Run every time when value of @Input value passed to component is changes
    ngOnChanges(changes: SimpleChanges): void {
        console.log("Inside the ngOnChanges")
        console.log("Message===>", this.message);
    }


    //ngOnInit is second life cycle hook of angular ,it will trigger only once at first change detection
    //You can access any updated value of @Input decorators value becuase all Input values where updated in ngOnChages
    ngOnInit() {
        console.log("Inside the ngOnInit")
        console.log("Message===>", this.message);
    }


    //Will trigger after every event trigger or every change detection
    ngDoCheck() {
        console.log("Inside the ngDoCheck()")
    }



    //This will trigger only once 
    //Before triggering this all ContentChild and ContentChildren values are updated
    ngAfterContentInit() {
        console.log("Inside the ngAfterContentInit()")
        console.log("text1=====>", this.text1.nativeElement)
    }

    //This will trigger every time when created ,checked or updated the value of ContentChild or ContentChildren
    ngAfterContentChecked(): void {
        console.log("Inside the ngAfterContentChecked()")
        console.log("text1=====>", this.text1.nativeElement)
    }




}