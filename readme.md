# Saas Monte Carlo Simulation
## Intro
***The purpose of this google spreadsheet is to calculate the investability of a SaaS business through simulating/forecasting LTV and MIRR given the limited data available***. Refer to this [google spreadsheet link](https://docs.google.com/spreadsheets/d/1fi0_3GVi_LFZ3E5ynoDtYRgl3uqYvZzjntZNhyXtQb0/edit?usp=sharing)

This is inspired by Douglas Hubbard's How to Measure Anything.

## How it works
1. "Input Data" sheet denotes the variables and parameters of the Saas business. These variables should be standard across all Saas. The only thing that changes is the min and max value. Min and max value is derived through the "Calibration Exercise" chapter in How to Measure Anything.
2. With the "Input Data", the Google script will simulate data in "Simulated Data" sheet.
3. The simulated data will determine the calculations in the following sheets: "User acq", "Funnel", "Retention", "Cashflow", "LTV"
4. Relevant data for sheets in step 3 will be collected and input into "Output Data". Steps 2 and 3 will repeat until the desired Number of Scenarios (in "Input Data") is reached.
5. The "Output Data" can then be used for calculations like MIRR in "MIRR" sheet.

## Anatomy of Google Spreadsheet's App Script
- Go to gscript through menu -> "Extensions" -> "App Script"
- This is where gscript code is written
  ![gscript code](/public/code.png)
- This is where tiggers can be initiated to run the code in the background
  ![Trigger Image 1](/public/trigger%201.png)
  ![Trigger Image 2](/public/trigger%202.png)
- This is where you can find if the logs for the execution and whether it is successful
  ![execution logs](/public/executions%20log.png)

## To Dos
- **Exceeded maximum execution time**: When running the code by clicking "Start" button in "Input Data" sheet, after around 5 to 6 minutes, there will be an `Exceeded maximum execution time` error. For this Monte Carlo Simulation to work, it requires at least 10,000 data points. Therefore, solution is to get 10,000 data points in "Output Data" sheet through background processing with "Triggers".
- **Improve MIRR**: Improve the "MIRR" sheet to calculate the investability of Saas business

