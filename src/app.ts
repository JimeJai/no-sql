import express, { json } from "express";
import errorHandler from "./middlewares/error-handler";

import mainRouter from "./routes";

const app = express();

app.use(json());

app.use("/", mainRouter);
app.use(errorHandler);

export default app;
