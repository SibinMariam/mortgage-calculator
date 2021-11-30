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
      payPerPeriod: 920.1345384255877,
      amortizationNoOfPayments: 120,
      termNoOfPayments: 12,
      amortizationDuration:
        10,
      termDuration: 1,
      amortizationTotalInterestPaid: 10416.144611073101,
      termTotalInterestPaid: 1916.6563502075232,
      amortizationTotalPrincipalPaid: 100000,
      termTotalTermPrincipalPaid: 1912.5594621010237,
      amortizationTotalCost: 110416.1446110731,
      termTotalCost: 11041.614461107052,
    }
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(fixture.debugElement.query(By.css('.summary-content'))).toBeDefined();
    expect(fixture.debugElement.query(By.css('.table'))).toBeDefined();
    expect(compiled.querySelector(".mortgage-summary").textContent).toContain(
      "Mortgage Summary"
    );
  });

});
