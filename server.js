require('dotenv').config();
const express = require('express');
const cors = require('cors');

const contactRoutes = require('./routes/contact');
const projectsRoutes = require('./routes/projects');

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',')
  : ['http://localhost:4200', 'http://192.168.1.85:4200'];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor Zencode corriendo en http://localhost:${PORT}`);
});
