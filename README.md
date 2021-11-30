# mortgage-calculator
Its a simple Web application for mortgage calculation

# Current features and scope:

1) Based on user data calculating the Mortgage details for a Term and Amortization Period
2) Showing calculated Number of Payments, Mortgage Payment, Principal Payments, Interest Payments, Total Cost for Term and Amortization period separately including table display.
3) Certain values(Interest Rate, Amortization Period year, Payment Frequency, Term) are loading with default value in the user form.
4) There are required validation in the form and showing error message to the user.
4) Displaying tooltip for user help text.
5) Unit test cases for components.

Application screen: 
<img width="869" alt="Screen Shot 2021-11-29 at 7 17 32 PM" src="https://user-images.githubusercontent.com/95212148/143980087-68bca61f-3996-4273-9cf1-8527590bd2a1.png">

Complete screen with summary
![screencapture-localhost-4200-2021-11-29-19_18_22](https://user-images.githubusercontent.com/95212148/143980129-5f52bde0-33be-45b0-84ce-54a202bba888.png)

# Future scope:

1) Detailed transaction display for each period.
2) More interactive data visualizations and projections using charts.
3) Include round off algorithm for value display.

All static values in the project are configured in constants.ts file.

# Technolgies and libraries used in the project.

Frontend

Angular CLI 6
Angular 6
BootStrap 
Modules like ToolTip for displaying help text
Unit testing:  Jasmine & Karma


# Steps to run the project locally:
Run `ng serve`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
To check the code coverage ng test --watch=false --code-coverage





