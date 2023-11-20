// src/app.ts
import express, { Application, Request, Response, NextFunction } from "express";
import connectDB from "./utils/db";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/usersRoutes";
import { authenticate } from "./utils/authMiddleware";

const app: Application = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes which don't need authentication
app.use("/auth", authRoutes);

app.use(authenticate);

// Routes which need authentication
app.use("/v1", userRoutes);

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Error handling middleware', err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
