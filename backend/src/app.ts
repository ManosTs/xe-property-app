import express from 'express';
import itemRoutes from "./routes/property.routes.ts";
import {errorHandler} from "./middlewares/error-handler.ts";
import logger from "morgan";
import cors from "cors";
import externalRoutes from './routes/external.routes.ts';

const app = express();
const corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));
// Routes
app.use('/api/properties', itemRoutes);
app.use('/api/external', externalRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;