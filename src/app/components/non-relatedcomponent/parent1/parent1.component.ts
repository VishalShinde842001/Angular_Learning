//This sturctur is created to communicate 
import { Component } from "@angular/core";


@Component({
    selector: 'parent1-component',
    templateUrl: 'parent1.component.html',
    styleUrls: ['parent1.component.css']
})
export class Parent1Component {


    dataFromChild1: string = '';
    getDataFromChild1(event: any) {
        this.dataFromChild1 = event;
    }
}