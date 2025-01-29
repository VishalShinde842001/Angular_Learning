import { Directive, ElementRef, Renderer2 } from "@angular/core";


@Directive({
    selector:'[header-directive]'
})
export class HeaderDirective{

    constructor(private elementRef:ElementRef,private renderer:Renderer2){
        this.applyStyle();
    }


    applyStyle(){
        this.renderer.addClass(this.elementRef.nativeElement,'headers')
    }

}