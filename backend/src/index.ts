import cors from "cors";
import { config } from "dotenv";
import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./connection";
import requestRouter from "./routes/requestRouter";
import retreatsRouter from "./routes/retreatsRouter";
import userFileRouter from "./routes/userFileRouter";
import userRouter from "./routes/userRouter";

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
        const port = process.env.PORT || 443;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => console.log("Error during Data Source initialization:", error));
