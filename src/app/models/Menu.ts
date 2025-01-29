export class Menu {

    menuId: number;
    menuDisplayName: string;
    menuRoute: string;
    menuIcon:string;
    constructor(menuId:number,displayName:string,route:string,menuIcon:string){
        this.menuId=menuId;
        this.menuDisplayName=displayName;
        this.menuRoute=route;
        this.menuIcon=menuIcon;
    }
}