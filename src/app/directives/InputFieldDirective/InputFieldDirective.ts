import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[input-field-hover-style]'
})
export class InputFieldDirective {

    constructor(private el: ElementRef, private renderer: Renderer2) {

    }
    @HostListener('focus', ['$event'])
    onFocus(event: Event): void {
        console.log("focus event====>", event)
        this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid blue');
        this.renderer.setStyle(this.el.nativeElement, 'background-color', '#f0f8ff');
    }

    @HostListener('blur', ['$event'])
    onBlur(event: Event): void {
        console.log("blur event====>", event)
        this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #ccc');
        this.renderer.setStyle(this.el.nativeElement, 'background-color', '#fff');
    }
}