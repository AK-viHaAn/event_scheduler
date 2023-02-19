const express=require("express")
const app=express()

const cron = require("node-cron");
const router = express. Router();
const route=require("./info")
 app.use("/",route)

 app.listen(3000, function(){
    console.log("Port running at "+3000)
 })