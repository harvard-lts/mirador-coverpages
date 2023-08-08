const consoleLogger = require('../../logger/logger.js').console;

const validation = {};

const exampleIdRegex = /^[0-9]{1,3}$/;

validation.validateExampleId = async (req, res, next) => {
  const exampleId = req.params.exampleId || null;

  let result = {};
  if (!exampleId || !exampleIdRegex.test(exampleId)) {
    result.error = `Invalid parameters. `;
    result.error += `exampleId must contain up to three numbers only. `;
    result.error += `exampleId: ${exampleId}`;
    result.status = 400;
    consoleLogger.error(result.error);
    return res.status(result.status).json(result);
  }
  next();
}

module.exports = validation;
