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

  // Creating an array of numbers from 1 to termMaxLimit to display  Terms year dropdown
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
  summaryInfo: any;

  constructor() { }
  ngOnInit() { }

  getPaymentDetails(): void {
    /**
     * This function is for calucating the summary section values.
     * Calculations are making specific to Term period and Amortization Period
     * Values calculating in this method : Payment Per Period(Mortgage Payment),
     * Number of Payments,Principal Payments, Interest Payments and Total Cost
     */
    const startingPrincipal = Number(this.formData.mortgageAmount);
    const interestRate = Number(this.formData.interestRate);
    const paymentType = this.formData.paymentFrequency;

    // Get payment frequecy/year from selected payment type.
    let paymentFrequency;
    paymentFrequency = Constants.payOptions.filter((item) => {
      return item.value === paymentType;
    })[0].frequency;
    const periodInterestRate = interestRate / 100 / Number(paymentFrequency);

    // Calculating total amortizationPeriod in years by combining year and month dropdown options.
    const monthsInYears = this.formData.amortizationPeriodMonth ? Number(this.formData.amortizationPeriodMonth) / 12 : 0;
    const amortizationPeriod = Number(this.formData.amortizationPeriodYear) + monthsInYears;
    const termYears = Number(this.formData.term);
    const years = amortizationPeriod;
    const numberofPayments = years * paymentFrequency;
    const termNumberOfPayments = termYears * paymentFrequency;

    /**
     * Pay Per Period(Mortgage Payment) Calculation is based on equation payment/period = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
     * P = Priciple amount, i = interest rate per period, n = number of payments in the total duation.
     **/
    const expValue = Math.pow(1 + +periodInterestRate, numberofPayments);
    const calculatedValue = startingPrincipal * ((periodInterestRate * expValue) / (expValue - 1));
    const payPerPeriod = Math.round(calculatedValue * 100) / 100;
    /**
     * If the Total Cost calculation is needed only for Amortization Period,
     * we can calculate Total interest paid = (pay per period*No of payments) - startingPrincipal.
     * But in our case we need to find it for the term period also.
     * As we need to display Total Cost for a term period along with complete Amortization Period,
     * iterating till the period and adding up totalInterestPaid
     * Enhancement scope: This values with each time projections while iteration can display in a
     * table/Graph with for more detailed visualization.
     */
    let deductedPrincipal = startingPrincipal;
    let totalInterestPaid = 0;
    let currentPeriod = 1;
    let totalTermInterestPaid = 0;
    let totalTermPrincipalPaid = 0;

    // Iterating till Deducted principal is 0 (complete pricipal payment)
    while (deductedPrincipal >= 0) {
      const periodInterest = deductedPrincipal * periodInterestRate;
      const principalPaid = payPerPeriod - periodInterest;
      totalInterestPaid = totalInterestPaid + periodInterest;
      deductedPrincipal = deductedPrincipal - principalPaid;
      /**
       * This section is for term interest and principal payment calculation.
       * Iterating and adding interest and principal paid during the term period.
       */
      if (currentPeriod <= termNumberOfPayments) {
        totalTermInterestPaid = totalTermInterestPaid + periodInterest;
        totalTermPrincipalPaid = totalTermPrincipalPaid + principalPaid;
      }
      currentPeriod++;
    }
    /**
     * Rounding the calculated values.
     * In actual banking or business scenario this could be implemented using specific rounding algoithm.
    */
    let totalCost = totalInterestPaid + startingPrincipal;
    totalCost = Math.round(totalCost * 100) / 100;
    let termTotalCost = totalTermPrincipalPaid + totalTermInterestPaid;
    termTotalCost = Math.round(termTotalCost * 100) / 100;
    totalTermPrincipalPaid = Math.round(totalTermPrincipalPaid * 100) / 100;
    totalTermInterestPaid = Math.round(totalTermInterestPaid * 100) / 100;
    totalInterestPaid = Math.round(totalInterestPaid * 100) / 100;

    const durationMonth =
      this.formData.amortizationPeriodMonth &&
        this.formData.amortizationPeriodMonth !== 0
        ? ", " + this.formData.amortizationPeriodMonth + " " + "Months"
        : "";
    this.summaryInfo = {
      payPerPeriod: payPerPeriod, // Pay Period is common for term and amortization.
      amortizationNoOfPayments: paymentFrequency * Number(years),
      termNoOfPayments: paymentFrequency * Number(this.formData.term),
      amortizationDuration: this.formData.amortizationPeriodYear + " Years" + durationMonth, // Combining years and month in display format
      termDuration: this.formData.term,
      amortizationTotalInterestPaid: totalInterestPaid,
      termTotalInterestPaid: totalTermInterestPaid,
      amortizationTotalPrincipalPaid: startingPrincipal,
      termTotalTermPrincipalPaid: totalTermPrincipalPaid,
      amortizationTotalCost: totalCost,
      termTotalCost: termTotalCost,
    };
  }

  isFormValid(): boolean {
    /**
     * Added additional check for number type and required for validation
     * Added only for mortgageAmount and interestRate as these are the only fields with free text option
     * */
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
