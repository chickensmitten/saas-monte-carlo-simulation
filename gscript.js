/** @OnlyCurrentDoc */

function CopyPastingInputToOutput() {
  var spreadsheet = SpreadsheetApp.getActive();
  var count = 1;
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Input Data'), true);
  var scenarios = spreadsheet.getRange("B1").getValue();
  console.log("Total Scenarios: " + scenarios);
  while (count <= scenarios) {
    console.log("Scenario: " + count);      
    // Fill in Input Data
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('User acq'), true);
    spreadsheet.getRange('B4').activate();
    spreadsheet.getRange('\'Simulated Data\'!A3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('User acq'), true);
    spreadsheet.getRange('C4').activate();
    spreadsheet.getRange('\'Simulated Data\'!B3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('User acq'), true);
    spreadsheet.getRange('D4').activate();
    spreadsheet.getRange('\'Simulated Data\'!C3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('User acq'), true);
    spreadsheet.getRange('F4').activate();
    spreadsheet.getRange('\'Simulated Data\'!D3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('User acq'), true);
    spreadsheet.getRange('B5').activate();
    spreadsheet.getRange('\'Simulated Data\'!E3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('User acq'), true);
    spreadsheet.getRange('C5').activate();
    spreadsheet.getRange('\'Simulated Data\'!F3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('User acq'), true);
    spreadsheet.getRange('D5').activate();
    spreadsheet.getRange('\'Simulated Data\'!G3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('User acq'), true);
    spreadsheet.getRange('F5').activate();
    spreadsheet.getRange('\'Simulated Data\'!H3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Funnel'), true);
    spreadsheet.getRange('B2').activate();
    spreadsheet.getRange('\'Simulated Data\'!I3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Funnel'), true);
    spreadsheet.getRange('B6').activate();
    spreadsheet.getRange('\'Simulated Data\'!J3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Funnel'), true);
    spreadsheet.getRange('B8').activate();
    spreadsheet.getRange('\'Simulated Data\'!K3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Funnel'), true);
    spreadsheet.getRange('B9').activate();
    spreadsheet.getRange('\'Simulated Data\'!L3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Retention'), true);
    spreadsheet.getRange('B2').activate();
    spreadsheet.getRange('\'Simulated Data\'!M3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Cashflow'), true);
    spreadsheet.getRange('B3').activate();
    spreadsheet.getRange('\'Simulated Data\'!N3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Cashflow'), true);
    spreadsheet.getRange('B4').activate();
    spreadsheet.getRange('\'Simulated Data\'!O3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Cashflow'), true);
    spreadsheet.getRange('B5').activate();
    spreadsheet.getRange('\'Simulated Data\'!P3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Cashflow'), true);
    spreadsheet.getRange('C3').activate();
    spreadsheet.getRange('\'Simulated Data\'!Q3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Cashflow'), true);
    spreadsheet.getRange('C4').activate();
    spreadsheet.getRange('\'Simulated Data\'!R3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Cashflow'), true);
    spreadsheet.getRange('C5').activate();
    spreadsheet.getRange('\'Simulated Data\'!S3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Cashflow'), true);
    spreadsheet.getRange('B8').activate();
    spreadsheet.getRange('\'Simulated Data\'!T3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);

    // Fill in Output Data
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Output Data'), true);
    spreadsheet.getRange(`B${count+2}`).activate();
    spreadsheet.getRange('LTV!B10').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.getRange(`C${count+2}`).activate();
    spreadsheet.getRange('\'User acq\'!I7').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.getRange(`D${count+2}`).activate();
    spreadsheet.getCurrentCell().setFormula(`B${count+2}-C${count+2}`);
    spreadsheet.getRange(`E${count+2}`).activate();
    spreadsheet.getRange('Retention!C28:V28').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    // SpreadsheetApp.flush(); // this is disabled in case it is needed in the future
    count += 1;
  };
};


function testingScriptTriggers1() {
  console.log("Running script to test triggers.")
  const ONE_SECOND = 1000;
  const ONE_MINUTE = ONE_SECOND * 60;
  const MAX_EXECUTION_TIME = (ONE_MINUTE * 5); // time limit is 6 minutes, so we make max execution time to 5 minute
  const NOW = Date.now();

  const isTimeLeft = () => {
    var result = MAX_EXECUTION_TIME > Date.now() - NOW;
    console.log("Is there time left? " + result);
    return result;
  };

  var count = 1
  while (count <= 10) {
    console.log(`this is ${count} count`);
    Utilities.sleep(50000);
    // the purpose of this code is to test if it can continuously run
    count += 1;
    if (isTimeLeft() == false) {
      var triggers = ScriptApp.getProjectTriggers();
      var spreadsheet = SpreadsheetApp.getActive();
      spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Instructions'), true);
      spreadsheet.getRange('A6').activate();
      const DateNow = Date.now();
      const LoggedDate = new Date(DateNow).toString();
      spreadsheet.getCurrentCell().setValue(LoggedDate);      
      console.log("Logged Date: " + LoggedDate);
      for (var i = 0; i < triggers.length; i++) {
        ScriptApp.deleteTrigger(triggers[i]);
      }
      // if the current data point is 1k, then you can stop and remove all triggers without new trigger
      var newSAT = ScriptApp.newTrigger("testingScriptTriggers1").timeBased().after(10 * 1000).create();
      break
    }
  }

}






