import express from "express";
import dotenv from "dotenv";
import detailsRouter from "./src/routes/details.js"
import cors from "cors"

dotenv.config()

const app = express();
const port = process.env.PORT

// Enable CORS for all routes
app.use(
    cors({
      origin: "*", // Allow all origins
      methods: "GET, POST, PUT, DELETE, OPTIONS", // Allow common HTTP methods
      allowedHeaders: "Content-Type, Authorization", // Allow specific headers
    })
  );
  
  // Middleware to handle preflight requests
  app.options("*", cors());

app.get('/', (req, res) => {
    res.send('Welcome to My Backend');
});

// routes
app.use("/api/details", detailsRouter);

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
    
});