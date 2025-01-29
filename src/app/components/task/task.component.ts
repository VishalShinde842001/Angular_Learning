import { Component, EventEmitter, Output } from "@angular/core";
import { Task } from "src/app/models/Task";


@Component(
    {
        selector: 'task',
        templateUrl: 'task.component.html',
        styleUrls: ['task.component.css']
    }
)
export class TaskComponent {

    selectedTask!: Task;



    getSelectedTask(event: Task) {
        console.log("Selected Task===>", event);
        this.selectedTask = event;
    }

}