import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";



@Directive(
    { selector: '[highlight]' }
)
export class HighlightDirective {

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }

    @HostListener('mouseenter') onHover() {
        console.log("Mouse Enter triggered")
        this.renderer.addClass(this.elementRef.nativeElement, 'highlight-text')
    }

    @HostListener('mouseleave') onLeave() {
        console.log("Mouse Leave Triggered")
        this.renderer.removeClass(this.elementRef.nativeElement, 'highlight-text')
    }

}