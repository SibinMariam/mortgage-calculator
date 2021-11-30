import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { MortgageCalculatorComponent } from "./components/mortgage-calculator/mortgage-calculator.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [AppComponent, MortgageCalculatorComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'MortgageCalculator'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("MortgageCalculator");
  }));

  it('should render top nav bar and view section on load ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.query(By.css('.navbar')).nativeElement).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.ui-view')).nativeElement).toBeTruthy();
  });
});
