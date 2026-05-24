import { Component, effect, inject, input, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-rightside',
    standalone: true,
    imports: [],
    templateUrl: './rightside.component.html',
    styleUrl: './rightside.component.css'
})
export class RightsideComponent implements OnInit {

    public data = input<Array<any>>([]);
    apiService = inject(ApiService);
    @Output() newItemEvent = new EventEmitter<string>(); // Define the event

    constructor() {
        effect(() => {
            console.log(this.apiService.count());
        })
    }
    
    ngOnInit(): void {
        this.addNewItem('New Item');
    }


    public addNewItem(value: string) {
        this.newItemEvent.emit(value); // Emit the event
    }
}
