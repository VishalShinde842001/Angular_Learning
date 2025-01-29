import { Observable } from "rxjs";
import { Menu } from "../models/Menu";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
@Injectable()
export class ProviderService {


    PATH_URL: any = {
        'MENUBAR':'assets/jsons/Menu.json'
    }
    constructor(private http: HttpClient) {

    }

    menuProvider(): Observable<Menu[]> {
        return this.http.get<Menu[]>(this.PATH_URL['MENUBAR']);
    }
}