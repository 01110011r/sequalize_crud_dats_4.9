import express from "express";
import "dotenv/config";
import myRouter from "./routers/main.routes.js";
import { newSequelize } from "./config/index.js";
const app=express();
app.use(express.json());

const main=async ()=>{
    try {
        await newSequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    try {
        app.use(myRouter);
    app.use("/*", (req, res)=>{
        console.log('????????????');
        res.status(404).send({message:"404 page not found!"})
        
    });
    } catch (error) {
        console.log(error.message);
    }
    app.listen(process.env.PORT, +process.env.HOST, ()=>console.log('done..!'))
}

main();