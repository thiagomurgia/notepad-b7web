import express from "express";
import cors from "cors";
import { db } from "./database/db";

import { Routes } from "./routes";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.use(express.json());

app.use(Routes);

app.listen(process.env.LOCAL_PORT || 3000, async () => {
  await db.sync();
  console.log(`Server LOGIN is running on port ${process.env.LOCAL_PORT}`);
});
