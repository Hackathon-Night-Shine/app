import "reflect-metadata";
import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { AppDataSource } from "./data-source";
import userRoutes from "./routes/user.routes";

// Load environment variables
config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// Default route
app.get("/", (req, res) => {
    res.send("Backend API is running!");
});

// Initialize TypeORM connection
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        
        // Start the server
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error("Error during Data Source initialization:", error);
    }); 