import express from "express";
import dotenv from "dotenv";
import detailsRouter from "./src/routes/details.js"
import cors from "cors"

dotenv.config()

const app = express();
const port = process.env.PORT

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to My Backend');
});

// routes
app.use("/api/details", detailsRouter);

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
    
});