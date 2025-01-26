import { Component, OnChanges, SimpleChanges, Input, AfterViewInit, AfterViewChecked, ViewChild } from "@angular/core";
@Component(
    { selector: 'all-hooks',
     templateUrl: 'all-hooks.component.html'
    }
)
export class AllHooksComponent implements AfterViewInit,AfterViewChecked{
   
    message: string = '';

    updateValue(num:any){
        this.num=num;
    }

    @ViewChild('number') num!:number;
    ngAfterViewInit(){
        console.log("Inside ngAfterViewInit()")
        console.log("Number=====>",this.num)
    }

    ngAfterViewChecked(): void {
        console.log("Inside ngAfterViewChecked()")
        console.log("Number=====>",this.num)
    }

    
}