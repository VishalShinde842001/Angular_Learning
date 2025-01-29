import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Menu } from "src/app/models/Menu";
import { ProviderService } from "src/app/services/provider.service";

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent {

    constructor(private router: Router,private provider:ProviderService) {
        this.menuProvider();
    }

    menus:Menu[]=[];

    menuProvider(){
        this.provider.menuProvider().subscribe(
            (data:any)=>{
                console.log("data======>",data)
                this.menus=data;
            }
        )
    }
}