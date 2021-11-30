import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MortgageCalculatorComponent } from "./mortgage-calculator.component";
import { MortgageSummaryComponent } from "../mortgage-summary/mortgage-summary.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Constants } from "../../constants";
import { By } from "@angular/platform-browser";

describe("MortgageCalculatorComponent", () => {
  let component: MortgageCalculatorComponent;
  let fixture: ComponentFixture<MortgageCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [MortgageCalculatorComponent, MortgageSummaryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render header as Mortgage Payment Calculator in a h4 tag", async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    fixture.whenStable().then(() => {
      expect(compiled.querySelector("h4").textContent).toContain(
        "Mortgage Payment Calculator"
      );
    });
  }));

  it("Should render all form fields", async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const mortgageAmount = compiled.querySelector('input[id="mortgageAmount"]');
    const interestRate = compiled.querySelector('input[id="interestRate"]');
    const amortizationPeriodYear = compiled.querySelector(
      'select[id="amortizationPeriodYear"]'
    );
    const amortizationPeriodMonth = compiled.querySelector(
      'select[id="amortizationPeriodMonth"]'
    );
    const paymentFrequency = compiled.querySelector(
      'select[id="paymentFrequency"]'
    );
    const term = compiled.querySelector('select[id="term"]');
    const mortgageSubmit = compiled.querySelector(
      'button[id="mortgageSubmit"]'
    );
    expect(mortgageAmount).toBeTruthy();
    expect(interestRate).toBeTruthy();
    expect(amortizationPeriodYear).toBeTruthy();
    expect(amortizationPeriodMonth).toBeTruthy();
    expect(paymentFrequency).toBeTruthy();
    expect(term).toBeTruthy();
    expect(mortgageSubmit).toBeTruthy();
  }));

  it("Calulate button should be present in the screen", async () => {
    expect(fixture.debugElement.query(By.css('.mortgageSubmit'))).toBeDefined();
  });

  it("Should call onSubmit method on form button click", async(() => {
    spyOn(component, "onSubmit");
    let button = fixture.debugElement.nativeElement.querySelector("button");
    button.click();
    fixture.whenStable().then(() => {
      expect(component.onSubmit).toHaveBeenCalled();
    });
  }));

  it("InterestRate default value should set as 2.5", async(() => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const interestRate = compiled.querySelector(
        'input[id="interestRate"]'
      ).value;
      expect(interestRate).toBe("2.5");
    });
  }));

  it("Amortization default year should set as 25", async(() => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const amortizationPeriodYear = compiled.querySelector(
        'select[id="amortizationPeriodYear"]'
      ).value;
      expect(amortizationPeriodYear).toBe(
        Constants.defaultamortizationPeriod.toString()
      );
    });
  }));

  it("Default Payment Frequency should set as Monthly", async(() => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const amortizationPeriodYear = compiled.querySelector(
        'select[id="paymentFrequency"]'
      ).value;
      expect(amortizationPeriodYear).toBe(Constants.defaultpayOption);
    });
  }));

  it("should call onSubmit method on form submit", async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const getForm = fixture.debugElement.query(By.css("#mortgageForm"));
    expect(getForm.triggerEventHandler("submit", compiled)).toBeUndefined();
  }));

  it("Invoke getPaymentDetails method by setting mock form data and check Mortgage Amount is correct", () => {
    component.formData = {
      mortgageAmount: 100000,
      interestRate: 1,
      amortizationPeriodYear: 10,
      amortizationPeriodMonth: null,
      defaultamortizationPeriod: 10,
      paymentFrequency: "MONTHLY",
      term: 1,
    };
    component.getPaymentDetails();
    expect((component.summaryInfo.payPerPeriod)).toBe(876.0412137016195)
  });

  describe("When submit is fired", () => {
    beforeEach(async(() => {
      component.formData = {
        mortgageAmount: 10,
        interestRate: Constants.defaultInterestRate,
        amortizationPeriodYear: Constants.defaultamortizationPeriod,
        amortizationPeriodMonth: null,
        defaultamortizationPeriod: Constants.defaultamortizationPeriod,
        paymentFrequency: Constants.defaultpayOption,
        term: Constants.defaultTerm,
      };
      spyOn(component, "getPaymentDetails");
      component.onSubmit();
    }));
    it("getPaymentDetails method should be called", () => {
      expect(component.getPaymentDetails).toHaveBeenCalled();
    });
  });

  it("Invoke getPaymentDetails method by setting mock form data and check if Amount number conversion is correct", () => {
    component.formData = {
      mortgageAmount: "10000",
      interestRate: Constants.defaultInterestRate,
      amortizationPeriodYear: Constants.defaultamortizationPeriod,
      amortizationPeriodMonth: null,
      defaultamortizationPeriod: Constants.defaultamortizationPeriod,
      paymentFrequency: Constants.defaultpayOption,
      term: Constants.defaultTerm,
    };
    component.getPaymentDetails();
    expect(isNaN(Number(component.formData.mortgageAmount))).toBe(false)
    expect(isNaN(Number(component.formData.interestRate))).toBe(false)
    expect(isNaN(Number(component.formData.amortizationPeriodMonth))).toBe(false)
  });

  it("Invoke getPaymentDetails method by setting mock form data and check Term no of payments and amortization no of paymenyts are correct", () => {
    component.formData = {
      mortgageAmount: 100000,
      interestRate: 1,
      amortizationPeriodYear: 10,
      amortizationPeriodMonth: null,
      defaultamortizationPeriod: 10,
      paymentFrequency: "MONTHLY",
      term: 1,
    };
    component.getPaymentDetails();
    expect((component.summaryInfo.amortizationNoOfPayments)).toBe(120)
    expect((component.summaryInfo.termNoOfPayments)).toBe(12)
  });
});
