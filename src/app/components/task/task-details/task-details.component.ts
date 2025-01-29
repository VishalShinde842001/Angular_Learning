import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from "@angular/core";
import { Task } from "src/app/models/Task";

@Component({
    selector: 'task-details',
    templateUrl: 'task-details.component.html',
    styleUrls: ['task-details.component.css']
})
export class TaskDetailsComponent implements OnChanges{


    @Input() selectedTask!:Task;

    ngOnChanges(changes:SimpleChanges){
        console.log("Changess==>",changes);
    }

}