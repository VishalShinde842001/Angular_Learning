

export class Task {

    taskId: number;
    taskName: string;
    taskDescription: string;
    taskStatus: string;
    taskStartDate: string;
    taskEndDate: string;

    constructor(taskId: number, taskName: string, taskDescription: string, taskStatus: string, taskStartDate: string, taskEndDate: string) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.taskStartDate = taskStartDate;
        this.taskEndDate = taskEndDate;
        this.taskStatus = taskStatus
    }
}