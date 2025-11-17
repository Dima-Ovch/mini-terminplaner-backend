require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect } = require('./db');
const appointmentRoutes = require('./routes/appointments');

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
