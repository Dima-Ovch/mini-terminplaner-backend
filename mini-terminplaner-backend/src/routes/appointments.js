import express from 'express';
const router = express.Router();

import { appointmentValidation, handleValidation } from '../validators.js';
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment
} from '../controllers/appointment.controller.js';

// Create
router.post('/', appointmentValidation, handleValidation, createAppointment);

// Read all (optional ?future=true)
router.get('/', getAppointments);

// Read single
router.get('/:id', getAppointmentById);

// Update
router.put('/:id', appointmentValidation, handleValidation, updateAppointment);

// Delete
router.delete('/:id', deleteAppointment);

export default router;