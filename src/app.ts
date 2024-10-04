import express, { json } from "express";

import mainRouter from "./routes";

const app = express();

app.use(json());

app.use("/", mainRouter);

export default app;
