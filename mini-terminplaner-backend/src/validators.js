import { body, validationResult } from 'express-validator';

export const appointmentValidation = [
  body('title')
    .isString()
    .notEmpty()
    .withMessage('Titel ist erforderlich'),
    
  body('date')
    .isISO8601()
    .withMessage('Datum muss ISO-Format haben (datetime-local)')
];

export const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
