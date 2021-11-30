import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MortgageSummaryComponent } from "./mortgage-summary.component";
import { By } from "@angular/platform-browser";

describe("MortgageSummaryComponent", () => {
  let component: MortgageSummaryComponent;
  let fixture: ComponentFixture<MortgageSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MortgageSummaryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it('should hide summary content on load ', () => {
    expect(fixture.debugElement.query(By.css('.summary-content'))).toBeNull();
  });

  it('Mocking summaryInfo and checking if summary section is displaying with summary content, Table, Mortgage summary sections', () => {
    component.summaryInfo = {
      payPerPeriod: 876.04,
      amortizationNoOfPayments: 120,
      termNoOfPayments: 12,
      amortizationDuration: "10 Years",
      termDuration: 1,
      amortizationTotalInterestPaid: 5124.95,
      termTotalInterestPaid: 956.28,
      amortizationTotalPrincipalPaid: 100000,
      termTotalTermPrincipalPaid: 9556.2,
      amortizationTotalCost: 10512.48,
      termTotalCost: 105124.95
    };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(fixture.debugElement.query(By.css('.summary-content'))).toBeDefined();
    expect(fixture.debugElement.query(By.css('.table'))).toBeDefined();
    expect(compiled.querySelector('.mortgage-summary').textContent).toContain(
      'Mortgage Summary'
    );
  });

});
