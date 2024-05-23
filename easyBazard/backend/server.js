import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import dataBaseConnect from './config/db/index.js'
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config()
const port = process.env.EXPRESS_PORT || 5000

dataBaseConnect()

const app = express() ;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Route 
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes)
app.use("/api/upload", uploadRoutes)



app.get( '/', (req, res) => {
    res.send('Hello 😊')
})

app.listen(port, () => console.log(`Server démarrer sur le port ${port}`))