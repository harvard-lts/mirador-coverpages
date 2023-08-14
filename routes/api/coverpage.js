const express = require('express');
const router = express.Router();
const consoleLogger = require('../../logger/logger.js').console;
const validation = require('../validation/validation.js');

router.get('/', function (req, res, next) {
  res.render('coverpage', {
      layout: false,
      title: 'Lee, Joseph. Hot dog in the manger. [Boston : Massachusetts Civic League, 1928?].',
      rightsText: 'http://nrs.harvard.edu/urn-3:hul.ois:hlviewerterms',
      manifestUrl: 'http://nrs.harvard.edu/urn-3:hul.ois:hlviewerterms',
      thumbUrl: '/images/default.jpg',
      rightsLogo: '/images/harvard_logo.jpg',
  });
});

module.exports = router;
