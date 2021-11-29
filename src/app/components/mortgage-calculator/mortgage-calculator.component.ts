import { Component, OnInit } from "@angular/core";
import { Constants } from "../../constants";

@Component({
  selector: "app-mortgage-calculator",
  templateUrl: "./mortgage-calculator.component.html",
  styleUrls: ["./mortgage-calculator.component.css"],
})
export class MortgageCalculatorComponent implements OnInit {
  // Creating an array of numbers from 1 to AmortizationPeriodMaxLimit to display  Amortization year dropdown
  amortizationPeriodYearOptions = Array.from(
    Array(Constants.amortizationPeriodMaxLimit + 1).keys()
  ).slice(1);

  // Creating an array of numbers from 1 to 12 to display Amortization Months in dropdown
  amortizationPeriodMonths = Array.from(Array(12).keys());

  // Creating an array of numbers from 1 to termMaxLimit to display  Tterms year dropdown
  termYearOptions = Array.from(Array(Constants.termMaxLimit + 1).keys()).slice(
    1
  );
  formData = {
    mortgageAmount: null,
    interestRate: Constants.defaultInterestRate,
    amortizationPeriodYear: Constants.defaultamortizationPeriod,
    amortizationPeriodMonth: null,
    defaultamortizationPeriod: Constants.defaultamortizationPeriod,
    paymentFrequency: Constants.defaultpayOption,
    term: Constants.defaultTerm,
  };
  paymetOptions = Constants.payOptions;
  summaryInfo: {};

  constructor() {}
  ngOnInit() {}

  getPaymentDetails(): void {
    const startingPrincipal = Number(this.formData.mortgageAmount);
    const interestRate = Number(this.formData.interestRate);
    const paymentType = this.formData.paymentFrequency;

    //Get payment frequecy/year from selected payment type.
    let paymentFrequency;
    paymentFrequency = Constants.payOptions.filter((item) => {
      return item.value == paymentType;
    })[0].frequency;
    let periodInterestRate = interestRate / 100 / Number(paymentFrequency);

    // Calculating total amortizationPeriod in years by combining year and month dropdown options.
    let amortizationPeriod =
      this.formData.amortizationPeriodYear +
      (this.formData.amortizationPeriodMonth
        ? Number(this.formData.amortizationPeriodMonth) / 12
        : 0);

    let termYears = Number(this.formData.term);
    let years = Number(amortizationPeriod);
    let numberofPayments = years * paymentFrequency;
    let termNumberOfPayments = termYears * paymentFrequency;
    /**
     * PayPerPeriod Calculation is based on equation payment/period = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
     * P = Priciple amount, i = interest rate per period, n = number of payments in the total duation.
     **/
    let expValue = Math.pow(1 + +periodInterestRate, numberofPayments);
    let payPerPeriod =
      startingPrincipal * ((periodInterestRate * expValue) / (expValue - 1));

    /**
     * If the Total Cost calculation is needed only for Amortization Period, we can calculate Total interest paid = (pay per period*No of payments) - startingPrincipal.
     * But in our case we need to find it for the term period also.
     * As we need to display Total Cost for a term period along with complete Amortization Period, iterating till the period and adding up totalInterestPaid
     * Enhancement scope: This values with each time projections while itteration can display in a table/Graph with for more detailed visualization.
     */
    let deductedPrincipal = startingPrincipal;

    let totalInterestPaid = 0;
    let currentPeriod = 1;
    let totalTermInterestPaid = 0;
    let totalTermPrincipalPaid = 0;

    // Iterating till deductedPrincipal is greater than 0
    while (deductedPrincipal >= 0) {
      let periodInterest = deductedPrincipal * periodInterestRate;
      let principalPaid = payPerPeriod - periodInterest;
      totalInterestPaid = totalInterestPaid + periodInterest;
      deductedPrincipal = deductedPrincipal - principalPaid;
      /**
       * For term interest and principal payment calculation.
       * Till termNumberOfPayments, adding interest and principal paid during that term period.
       */
      if (currentPeriod <= termNumberOfPayments) {
        totalTermInterestPaid = totalTermInterestPaid + periodInterest;
        totalTermPrincipalPaid = totalTermPrincipalPaid + principalPaid;
      }
      currentPeriod++;
    }
    const totalCost = totalInterestPaid + startingPrincipal;
    const termTotalCost = totalTermPrincipalPaid + totalTermInterestPaid;
    let durationMonth =
      this.formData.amortizationPeriodMonth &&
      this.formData.amortizationPeriodMonth != 0
        ? ", " + this.formData.amortizationPeriodMonth + " " + "Months"
        : "";

    this.summaryInfo = {
      payPerPeriod: payPerPeriod, // payPeriod is common for term and amortization.
      amortizationNoOfPayments: paymentFrequency * years,
      termNoOfPayments: paymentFrequency * Number(this.formData.term),
      amortizationDuration:
        this.formData.amortizationPeriodYear + " Years" + durationMonth,
      termDuration: this.formData.term,
      amortizationTotalInterestPaid: totalInterestPaid,
      termTotalInterestPaid: totalTermInterestPaid,
      amortizationTotalTermPrincipalPaid: startingPrincipal,
      termTotalTermPrincipalPaid: totalTermPrincipalPaid,
      amortizationTotalCost: totalCost,
      termTotalCost: termTotalCost,
    };
  }

  isFormValid(): boolean {
    // Checking if its number or empty for validation
    if (
      !this.formData.mortgageAmount ||
      !this.formData.interestRate ||
      isNaN(this.formData.mortgageAmount) ||
      isNaN(this.formData.interestRate)
    ) {
      return false;
    }
    return true;
  }

  onSubmit() {
    // Calculations are doing only if the form is valid.
    if (!this.isFormValid()) {
      return;
    }
    this.getPaymentDetails();
  }
}
