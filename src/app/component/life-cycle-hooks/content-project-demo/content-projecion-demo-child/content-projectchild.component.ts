import { AfterContentChecked, Component, ContentChild, ContentChildren, ElementRef, QueryList } from "@angular/core";


@Component(
    {
        selector: 'content-projection-demo-child',
        templateUrl: 'content-projectchild.component.html'
    }
)
export class ContentProjectionDemoChild implements AfterContentChecked {


    //If there is multiple Template refernce present in data project from parent even ContentChild will get refernce of first only
    @ContentChild('temp') temp!: ElementRef;

    //If there are multiple template refernce passed from parent with same template refernce we can simply use ContentChildren
    //Becuase contentChild will accept only refernce of first present and ContentChildren will get all 
    @ContentChildren('temp') listTemp!: QueryList<ElementRef>;


    //As every time there is ContentChild crated checked update below hook will reaise
    ngAfterContentChecked() {
        console.log("ngAfterContentChecked() hook triggered")
        console.log("Temp coming from content proejct from parent=======>", this.temp.nativeElement)

        //This will print list of all template reference passed from content proejct inside
        this.listTemp.forEach(
            (el) => {
                console.log(el.nativeElement)
            }
        )
    }
}