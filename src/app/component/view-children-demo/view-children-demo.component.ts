import { Component, ElementRef, QueryList, ViewChildren } from "@angular/core";


@Component(
    {
        selector: 'view-children-demo',
        templateUrl: 'view-children-demo.component.html'
    }
)
export class ViewChildrenDemo {

    @ViewChildren('myName') nameRef!: QueryList<ElementRef>

    fullName!: string;
    showFullName() {
        let name = '';
        this.nameRef.forEach(
            (el => {
                name += el.nativeElement.value+'   ';
            })
        )
        this.fullName = name;

    }
}