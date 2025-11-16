import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import {createServer} from 'node:http';
import { Server } from 'socket.io';
import cors from 'cors';
import { link } from 'node:fs';
import { connecttoSocket } from './controllers/socketManager.js';
import userRoutes from "./routes/user.routes.js"


const app=express();
const server=createServer(app);
const io=connecttoSocket(server);

const DB_URL=process.env.MONGO_URL;

app.set("port",(process.env.PORT||8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use("/api/v1/users",userRoutes); 


app.get("/",(req,res)=>{
    res.send("home");
})

const start=async()=>{
    const connectiontodb=await mongoose.connect(DB_URL);
    console.log("connection success")
    server.listen(app.get("port"),()=>{
    console.log("server is listen on port 8000");
})
}



start();