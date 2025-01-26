import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core'

@Component({
    selector: 'container',
    templateUrl: 'container.component.html'
})
export class ContainerComponent {

    searchKeyFromSearchComponent: string = '';

    constructor(private renderer:Renderer2){
     //   this.renderer.addClass(this.viewchilddemo,'highlight-text')
    }
    ngAfterViewInit() {
        this.renderer.addClass(this.viewchilddemo.nativeElement, 'highlight-text');
    }
    @ViewChild('searchReference') searchReference!: ElementRef;

    @ViewChild('viewchilddemo',{static : true}) viewchilddemo!:ElementRef;

    passSearchToProductList(event: any) {
        console.log("seachref======>", this.searchReference)
        console.log("Event passed to container======>", event)
        this.searchKeyFromSearchComponent = event;
    }

   
}