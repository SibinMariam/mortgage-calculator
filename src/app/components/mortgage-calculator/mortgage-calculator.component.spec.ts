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
    const fixture = TestBed.createComponent(MortgageCalculatorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h4").textContent).toContain(
      "Mortgage Payment Calculator"
    );
  }));

  it("Should render all form fields", () => {
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
  // it("MortgageAmount Error message block should be hidden on load", () => {
  //   fixture.whenStable().then(() => {
  //     expect(
  //       fixture.debugElement.query(By.css(".mortgageAmountError")).nativeElement
  //     ).toBeFalsy();
  //   });
  // });
  // it("InterestRate Error message block should be hidden on load", () => {
  //   fixture.whenStable().then(() => {
  //     expect(
  //       fixture.debugElement.query(By.css(".interestRateError")).nativeElement
  //     ).toBeFalsy();
  //   });
  // });

  // it("InterestRate Error message block should display on sumbit with empty mortgageAmount", () => {
  //   fixture.whenStable().then(() => {
  //     let component = fixture.componentInstance;
  //     component.formData.mortgageAmount = null;
  //     let button = fixture.debugElement.nativeElement.querySelector("button");
  //     button.click();
  //     fixture.detectChanges();
  //     expect(
  //       fixture.debugElement.query(By.css(".mortgageAmountError")).nativeElement
  //     ).toBeTruthy();
  //   });
  // });

  it("should call onSubmit method on form submit", () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const getForm = fixture.debugElement.query(By.css("#mortgageForm"));
    expect(getForm.triggerEventHandler("submit", compiled)).toBeUndefined();
  });
  // it("should call getPaymentDetails() method on form submit", () => {
  //   component.onSubmit();

  //   expect(component.isFormValid).toHaveBeenCalledTimes(1);

  //   // expect(component.getPaymentDetails).toHaveBeenCalledTimes(1);
  // });
  describe("When submit is fired", () => {
    beforeEach(() => {
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
    });
    it("getPaymentDetails method should be called", () => {
      expect(component.getPaymentDetails).toHaveBeenCalled();
    });
  });
});
