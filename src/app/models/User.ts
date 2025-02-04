

export class User{

    userId:number;
    userName:string;
    userAge:number;
    userSalary:number;

    constructor(userId:number,userName:string,userAge:number, userSalary:number){
        this.userId=userId;
        this.userName=userName;
        this.userAge=userAge;
        this.userSalary=userSalary;
    }
}