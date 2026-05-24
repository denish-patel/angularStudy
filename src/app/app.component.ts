import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, signal, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router';
import { HighlightDirective } from '../directive/highlight.directive';
import { InputComponent } from "../shared/input/input.component";
import { RightsideComponent } from "../shared/rightside/rightside.component";
import { ChildComponent } from "../shared/child/child.component";
import { DOCUMENT } from '@angular/common';
import { ApiService } from '../services/api.service';
import { NavbarComponent } from "../shared/navbar/navbar.component";


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink, HighlightDirective, InputComponent, RightsideComponent, ChildComponent, NavbarComponent],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements AfterViewInit, OnInit, AfterContentInit, AfterViewChecked {

    @ViewChild('appchildC') _appchildC!: ChildComponent;
    @ViewChild(RightsideComponent) _appRightSideC!: RightsideComponent;
    private document = inject(DOCUMENT);
    private apiService = inject(ApiService)

    public title: string = 'angularStudy';
    public buttonText = signal<string>('Copy');
    public selectedRow = signal<string>('');
    public rightSideData = signal<Array<any>>([
        { title: 'Explore the Docs help', link: 'https://angular.dev' },
        { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
        { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
        { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
        { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
    ]);

    constructor(

    ) { }

    ngOnInit(): void {
        const link = this.document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Roboto&display=swap';
        this.document.head.appendChild(link);
        console.log(this.twoSumNum([11, 7, 2, 5, 4, 15], 9))
    }

    public copytoClipboard(rowData: string) {
        if (!rowData) {
            throw new Error('Invalid Value');
        }
        navigator.clipboard.writeText(rowData).then(() => {
            this.selectedRow.set(rowData);
            this.buttonText.set('Copied');
            this.rightSideData()[0].title = 'Copied';
        })
        setTimeout(() => {
            this.buttonText.set('Copy');
            this.rightSideData()[0].title = 'Explore the Docs help';
        }, 2000)
    }

    ngAfterViewInit(): void {
        console.log(`Parent Comp - ${this._appchildC._childpTag.nativeElement.innerHTML}`);
        if (this._appRightSideC) {
            console.log(`Right Side Comp - ${this._appRightSideC?.data().map((x) => {
                console.log(x)
            })}`);
        }
    }

    ngAfterViewChecked(): void {
    }

    ngAfterContentInit(): void {
    }

    public twoSumNum(numArr: any, target: number) {
        let result = [];
        if (numArr.length < 0) {
            return [];
        }
        for (let i = 0; i < numArr.length; i++) {
            if (numArr[i] + numArr[i + 1] === target) {
                result.push(i, i + 1);
            }
        }
        return result;
    }

    public sendClick() {
        this.apiService.updateCount();
    }

    public handleNewItem(value: string) {
        this.rightSideData.update((data) => {
            data.push({ title: value, link: 'https://angular.dev' });
            return data;
        });
    }

}
