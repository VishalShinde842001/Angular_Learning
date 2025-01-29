import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Task } from "src/app/models/Task";
import { TaskService } from "src/app/services/task.service";


@Component(
    {
        selector: 'task-list',
        templateUrl: 'task-list.component.html',
        styleUrls: ['task-list.component.css']
    }
)
export class TaskListComponent {


    @Output()
    selectTask: EventEmitter<Task> = new EventEmitter<Task>();

  
    taskList: Task[] = [];


    onTaskSelect(task:Task){
        this.selectTask.emit(task);
    }
    
    constructor(private taskService: TaskService) {
        this.getTaskList();
    }

    getTaskList() {
        this.taskList = this.taskService.getTaskList();
        console.log("tasklist======>", this.taskList)
    }


}