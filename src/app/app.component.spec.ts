import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
    
    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [provideRouter([])],
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    it(`should have the 'angularStudy' title`, () => {
        expect(app.title).toEqual('angularStudy');
    });

    it('should render title', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angularStudy');
    });

    it(`should get the value from copytoClipboard method`, async () => {
        const sampleRowData = "Hello Data";
        app.copytoClipboard(sampleRowData); // method is called 
        await navigator.clipboard.writeText(sampleRowData);

        expect(app.selectedRow()).toBe('Hello Data');
        expect(app.buttonText()).toBe('Copied');
    });

    it(`should throw error without parameter of copytoClipboard method`, async () => {
        const sampleRowData = "";
        expect(() => app.copytoClipboard(sampleRowData)).toThrowError('Invalid Value');
    });

    
    it('should return indices for adjacent pair that sum to target', () => {
        expect(app.twoSumNum([11, 7, 2, 5, 4, 15], 9)).toEqual([1, 2, 3, 4]);
    });

    it('should return empty array when no adjacent pairs sum to target', () => {
        expect(app.twoSumNum([1, 2, 3, 4], 100)).toEqual([]);
    });

    it('should return empty array for empty input', () => {
        expect(app.twoSumNum([], 5)).toEqual([]);
    });

    it('should handle negative numbers', () => {
        expect(app.twoSumNum([-1, -8, 9, 1], 0)).toEqual([1, 2]);
    });

    it('should return empty array for array of length 1', () => {
        expect(app.twoSumNum([5], 5)).toEqual([]);
    });

    it('should return all valid adjacent pairs', () => {
        expect(app.twoSumNum([4, 5, 4, 5, 4], 9)).toEqual([0, 1, 2, 3]);
    });

    it('should not include out-of-bounds index', () => {
        expect(app.twoSumNum([1, 8], 9)).toEqual([0, 1]);
    });

});
