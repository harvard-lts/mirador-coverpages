const axios = require('axios');
const consoleLogger = require('../logger/logger.js').console;
const httpCtrl = require('./http.ctrl');
const { jsPDF } = require("jspdf");
const pdfCtrl = {};

pdfCtrl.createPDF = async (req, res) => {
  
  const requestOptionsData = {
    method: 'GET',
    url: 'https://phil.share.library.harvard.edu/',
    rejectUnauthorized: false
  };

  let response;
  try {
    response = await httpCtrl.makeRequest(requestOptionsData);
    consoleLogger.log('debug', response.data);
  } catch (e) {
    const errorMsg = 'Unable to make request error: ${e}';
    console.error(errorMsg);
  }

  consoleLogger.log('debug', 'DONE!!!!');
  const doc = new jsPDF();
  /*doc.html(response.data, {
    callback: function(doc) {
        // Save the PDF
        doc.save('test.pdf');
    },
    margin: [10, 10, 10, 10],
    autoPaging: 'text',
    x: 0,
    y: 0,
    width: 190, //target width in the PDF document
    windowWidth: 675 //window width in CSS pixels
  });*/
  doc.text("<html><head><title>Testing!</title><body><h1>Hello world!</h1><p>Does this work?</p></body></html>", 10, 10);
  doc.save("test.pdf"); // will save the file in the current working directory
  consoleLogger.log('debug', 'PDF CREATED!');
  res.download("test.pdf");
   
}

module.exports = pdfCtrl;
