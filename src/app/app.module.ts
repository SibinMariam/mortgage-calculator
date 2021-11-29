import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { MortgageCalculatorComponent } from "./components/mortgage-calculator/mortgage-calculator.component";
import { MortgageSummaryComponent } from "./components/mortgage-summary/mortgage-summary.component";

@NgModule({
  declarations: [
    AppComponent,
    MortgageCalculatorComponent,
    MortgageSummaryComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
