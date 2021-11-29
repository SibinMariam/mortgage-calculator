import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-mortgage-summary",
  templateUrl: "./mortgage-summary.component.html",
  styleUrls: ["./mortgage-summary.component.css"],
})
export class MortgageSummaryComponent implements OnInit {
  @Input()
  summaryInfo: {};

  constructor() {}
  ngOnInit() {}
}
