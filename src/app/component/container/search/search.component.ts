import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
    styleUrls:['search.component.css']
})
export class SearchComponent {
    serachText:string=''
    @Output()
    searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

    searchingProduct(){
        this.searchTextChanged.emit(this.serachText)
    }
}