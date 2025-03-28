import express from "express";
import cors from "cors";
import userRoutes from "./Routes/users.js";

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use("/", userRoutes);

app.listen(8800);
