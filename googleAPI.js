function doGet(e){
  var debug = ''
    // Function partly made by Kent Smotherman, see at https://medium.com/@kentsmotherman/saving-data-from-your-web-pages-to-google-sheets-c632cef61abb
    try {
      //get id of sheet to append to
      const ss = SpreadsheetApp.openById("1EHyVziI0R3JawR85Fkn3XIn5WpXbn_GjlHQxlRlxPnc");
      debug = 'here1';
      //get name of sheet to append to
      const General_data = ss.getSheetByName('General_data');
      const Read_times = ss.getSheetByName('Read_times');
      const Truth_Times = ss.getSheetByName('Truth_Times');
      const Lie_Times = ss.getSheetByName('Lie_Times');
      debug = 'here2';
      var headersG = General_data.getRange(1, 1, 1, General_data.getLastColumn()).getValues()[0];
      var nextRowG = General_data.getLastRow() + 1; 
      var rowG = []; 
      debug = 'here3';
      //loop through the header columns to put the incoming data into the right column
      //A column with the heading Timestamp generates the current timestamp
      for (var i in headersG) {
        if (headersG[i] == "Timestamp") {
            rowG.push(new Date());
          debug = 'here4';
        } else {
          //Put the data into the right column
            rowG.push(e.parameters['Participant']);
        }
      }
      General_data.appendRow(rowG);
      debug = 'here5';
    //   var headersR = Read_times.getRange(1, 1, 1, General_data.getLastColumn()).getValues()[0];
      var nextRowR = Read_times.getLastRow() + 1;
      debug = 'here5.1';
      var rowR = []; 
      debug = e.parameters['Read_times'];
      for(var a = 0; e.parameters['Read_times'].length; a++) {
        debug = 'here5.3';
        if(a == 0) {rowR.push(e.parameters['Participant']);};
        rowR.push(e.parameters['Read_times'][a]);
      };
      //debug = e.parameters['Read_times'];
      
      Read_times.appendRow(rowR);
      debug = 'here6';
      var nextRowT = Truth_Times.getLastRow() + 1; 
      var rowT = []; 
      for(var a = 0; e.parameters['Truth_Times'].length; a++) {
        if(a == 0) {rowT.push(e['Participant']);};
        rowT.push(e.parameters['Truth_Times'][a]);
      };
      Truth_Times.appendRow(rowT);

      var nextRowL = Lie_Times.getLastRow() + 1; 
      var rowL = []; 
      for(var a = 0; e.parameters['Lie_Times'].length; a++) {
        if(a == 0) {rowL.push(e['Participant']);};
        rowL.push(e.parameters['Lie_Times'][a]);
      };
      Lie_Times.appendRow(rowL);

  //Put the new row into the sheet
      //Generate a JSON resopnse
      return ContentService
      .createTextOutput(JSON.stringify({status:true}))
      .setMimeType(ContentService.MimeType.JSON);
    }
    catch (e) {
      return ContentService.createTextOutput(debug)
      //.createTextOutput(JSON.stringify({status:false}))
      //.setMimeType(ContentService.MimeType.JSON);
    }
  };