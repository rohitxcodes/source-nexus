import express from "express";
import submitRoutes from "./routes/submit.js";

const app = express();
app.use(express.json());

// app.use("/submit", submitRoutes);

app.listen(4000, () => {
  console.log("Backend running on port http://localhost:4000");
});
