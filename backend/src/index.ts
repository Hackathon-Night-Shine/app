import "reflect-metadata";
import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { AppDataSource } from "./connection";
import userRoutes from "./routes/userRoutes";
import requestRouter from "./routes/requestRouter"

// Load environment variables
config();

// Create Express app
export const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", userRoutes);
app.use("/api", requestRouter)

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
    .catch((error) => console.log("Error during Data Source initialization:", error));