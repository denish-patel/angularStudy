import { Component, effect, inject, input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-rightside',
    standalone: true,
    imports: [],
    templateUrl: './rightside.component.html',
    styleUrl: './rightside.component.css'
})
export class RightsideComponent {

    public data = input<Array<any>>([]);
    apiService = inject(ApiService);

    // public items: Array<any> = [
    //     { title: 'Explore the Docs', link: 'https://angular.dev' },
    //     { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
    //     { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
    //     { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
    //     { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
    // ];

    constructor(){
        effect(()=>{
            console.log(this.apiService.count());
        })
    }
}
