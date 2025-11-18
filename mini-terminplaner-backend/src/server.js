import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { connect } from './db.js';
import appointmentRoutes from './routes/appointments.js';

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json());

app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 4000;

connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mini_terminplaner')
  .then(() => {
    app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
  })
  .catch((err) => console.error("DB Verbindungsfehler:", err));
