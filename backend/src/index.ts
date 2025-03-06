import "reflect-metadata";
import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { AppDataSource } from "./connection";
import userRouter from "./routes/userRouter";
import requestRouter from "./routes/requestRouter";
import retreatsRouter from "./routes/retreatsRouter";
import userFileRouter from "./routes/userFileRouter";

// Load environment variables
config();

// Create Express app
export const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", userRouter);
app.use("/api", requestRouter);
app.use("/api", retreatsRouter);
app.use("/api", userFileRouter);

// Default route
app.get("/", (req, res) => {
  res.send("Backend API is running!");
});

AppDataSource()
  .then(() => {
    console.log("Database created and data source initialized successfully!");
    // Your application code here
    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) =>
    console.log("Error during Data Source initialization:", error)
  );
