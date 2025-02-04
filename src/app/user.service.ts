import { EventEmitter, Injectable } from '@angular/core';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  userList: User[] = [
    new User(1, 'Vishal Shinde', 24, 50000),
    new User(2, 'Jaydeep Hajare', 25, 80000),
    new User(3, 'Shubham Valekar', 24, 90000),
    new User(4, 'Sumit Bhosale', 24, 150000),
    new User(5, 'Tejas Dhope', 24, 40000),
    new User(6, 'Sham Kapase', 23, 60000),
    new User(7, 'Amit Dhok', 28, 55000)
  ]
  constructor() {

  }

  getUserList() {
    return this.userList;
  }

  createUser(user: User) {
    this.userList.push(user);
  }

  userEmitter:EventEmitter<User>=new EventEmitter<User>();
  showUserDetails(user:User){
    this.userEmitter.emit(user);
  }

}
