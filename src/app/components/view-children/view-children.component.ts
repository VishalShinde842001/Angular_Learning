import { AfterViewChecked, Component, ElementRef, QueryList, ViewChild, ViewChildren } from "@angular/core";


@Component({
    selector: 'view-children-demo',
    templateUrl: 'view-children.component.html'
})
export class ViewChildrenComponent implements AfterViewChecked {


    @ViewChild('p') p!: ElementRef;
    @ViewChildren('p') plist: QueryList<ElementRef> = new QueryList<ElementRef>();

    ngAfterViewChecked() {
        //Ths is just a ngAfterViewChecked lifecycle hook simply trigger every time whene there is change in ViewChild varaibles
        console.log("This is just ngAfterViewCheck lifecycle hook")
        console.log("p======>", this.p.nativeElement);
        console.log("=======================================")
        this.plist.forEach(
            (p => {
                console.log(p.nativeElement)
            })
        )
    }



}