import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config({
  path: '.env'
});

import aiRouter from './router/ai.router.js';
const app = express();
const PORT = process.env.PORT || 3000;
// middleware
app.use(express.json());
app.use(cors({
  origin: "https://health-assistent-21bi.vercel.app", // allow only frontend
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));


// route
app.use('/api/ai', aiRouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
