import { Component, ElementRef, signal, ViewChild, AfterViewInit, inject, OnInit, effect } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-child',
    standalone: true,
    imports: [],
    templateUrl: './child.component.html',
    styleUrl: './child.component.css',
    host: {
        '[class.hovered]': 'isHovered()',
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()',
        '(click)': 'onClick()'
    }
})
export class ChildComponent implements AfterViewInit, OnInit {

    @ViewChild('childpTag') _childpTag!:ElementRef;
    isHovered = signal(false);
    apiService = inject(ApiService);

    constructor(){
        effect(()=>{
            console.log(this.apiService.count());
        })
    }

    ngOnInit(): void {
        
    }

    onClick() {
        console.log('onclick....');
    }

    onMouseEnter() {
        console.log('onmouseEnter....');
        this.isHovered.set(true);
    }

    onMouseLeave() {
        console.log('onmouseleave....');
        this.isHovered.set(false);
    }

    ngAfterViewInit(): void {
        console.log(this._childpTag.nativeElement.innerHTML)
    }

}
