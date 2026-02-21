import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import patientRoutes from './routes/patient.routes.js';
import analysisRoutes from './routes/analysis.routes.js';
import { errorHandler, notFound } from './middleware/error.middleware.js';

const app = express();
const PORT = process.env.PORT ?? 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN ?? 'http://localhost:3000';

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.use('/api/patient', patientRoutes);
app.use('/api/analysis', analysisRoutes);

app.get('/health', (req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

app.use(notFound);
app.use(errorHandler);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
