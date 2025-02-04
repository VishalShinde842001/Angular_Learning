import { Component, Input } from "@angular/core";
import { User } from "src/app/models/User";


@Component(
    {
        selector:'user-details',
        templateUrl:'user-details.component.html'
    }
)
export class UserDetailsComponent{

    @Input() userDetails!:User;

}