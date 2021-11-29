export class Constants {
  static readonly amortizationPeriodMaxLimit = 30;
  static readonly defaultamortizationPeriod = 25;
  static readonly termMaxLimit = 5;
  static readonly defaultInterestRate = 2.5;
  static readonly defaultTerm = 1;
  static readonly payOptions = [
    { value: "WEEKLY", frequency: 52, label: "Weekly" },
    { value: "BI-WEEKLY", frequency: 26, label: "Bi-Weekly(Every 2 weeks)" },
    {
      value: "SEMI-MONTHLY",
      frequency: 24,
      label: "Semi-Monthly(24x per year)",
    },
    { value: "MONTHLY", frequency: 12, label: "Monthly(12x per year)" },
  ];
  static readonly defaultpayOption = "MONTHLY";
}
