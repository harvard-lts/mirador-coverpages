const express = require('express');
const router = express.Router();
const pdfCtrl = require('../../controllers/pdf.ctrl');
const consoleLogger = require('../../logger/logger.js').console;
const validation = require('../validation/validation.js');

router.get('/', function (req, res, next) {
  
  return pdfCtrl.createPDF(req, res);

});

module.exports = router;
