import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight]',
    standalone: true
})
export class HighlightDirective {

    constructor(
        private el: ElementRef
    ) {
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('click') 
    onHighLightClick() {
        this.el.nativeElement.style.textTransform = 'uppercase';
    }

    @HostListener('click') 
    onHighLightHover() {
        this.el.nativeElement.style.textTransform = 'lowercase';
    }
}
