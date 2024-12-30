import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import paymentRoutes from './routes/paymentRoutes';
import { authMiddleware } from './middleware/auth';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Protected routes
app.use('/api', authMiddleware, paymentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});