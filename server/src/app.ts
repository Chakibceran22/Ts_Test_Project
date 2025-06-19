import { errorHandler } from "./middleware/errorHandler";
import express from "express";
import userRoutes from './routes/UserRoutes'
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes)

app.use(errorHandler);

export default app