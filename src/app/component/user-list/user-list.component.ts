import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";
import { UserService } from "src/app/user.service";

@Component(
    {
        selector: 'user-list',
        templateUrl: 'user-list.component.html',
        styleUrls: ['user-list.component.css']

    }
)
export class UserListComponent implements OnInit {

    constructor(private userService: UserService) {

    }
    ngOnInit(): void {
        this.getUserList()
    }

    showUserDetails(user:User){
        this.userService.showUserDetails(user)

        

    }

    userList: User[] = [];

    getUserList() {
        this.userList = this.userService.getUserList();
    }


    userToAdd:User={
        userId: 0,
        userName: "",
        userAge: 0,
        userSalary: 0
    };
    addUser() {
        this.userService.createUser(this.userToAdd);
    }
}