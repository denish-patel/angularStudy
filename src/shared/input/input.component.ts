import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [],
    templateUrl: './input.component.html',
    styleUrl: './input.component.css'
})
export class InputComponent {
    
    @Input() id:string | undefined;
    @Input() name:string | undefined;
    @Input() class:string | undefined;
    @Input() label:string | undefined;
    @Input() required:string | undefined;
    
    

}
