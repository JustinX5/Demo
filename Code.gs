function doGet(e) {
  if (!e.parameter.page) {
    var x = HtmlService.createTemplateFromFile("Index");
    var y = x.evaluate();
    var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    return z;
  }
  return HtmlService.createTemplateFromFile(e.parameter['page']).evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function userClicked(userData) {
  var id = "1fFKpbWqVEvCHDpDBh24DOsfgCR9hk8d7OkRddGSc-3s";
  var ss = SpreadsheetApp.openById(id);
  var ws = ss.getSheetByName("Info");

  ws.appendRow([new Date(), userData.userName, userData.userEmail, userData.userMesg]);
}

function getDataFromSheet() {
  var sheet = SpreadsheetApp.openById('1fFKpbWqVEvCHDpDBh24DOsfgCR9hk8d7OkRddGSc-3s').getActiveSheet();
  var data = sheet.getDataRange().getValues();

  var jsonData = [];
  for (var i = 1; i < data.length; i++) {
    var row = {};
    row.name = data[i][0];
    row.region = data[i][1];
    row.department = data[i][2];
    jsonData.push(row);
  }

  return JSON.stringify(jsonData);
}
