import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import { connect } from './db.js';
import appointmentRoutes from './routes/appointments.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json());

app.use('/api/appointments', appointmentRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mini_terminplaner')
  .then(() => {
    app.listen(PORT, () => console.log(chalk.bgGreen('Server läuft auf Port ' + PORT)));
  })
  .catch((err) => console.error("DB Verbindungsfehler:", err));
