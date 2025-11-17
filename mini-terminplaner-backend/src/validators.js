const { body, validationResult } = require('express-validator');

const appointmentValidation = [
  body('title').isString().notEmpty().withMessage('Titel ist erforderlich'),
  body('date').isISO8601().withMessage('Datum muss ISO-Format haben (datetime-local)')
];

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

module.exports = { appointmentValidation, handleValidation };
