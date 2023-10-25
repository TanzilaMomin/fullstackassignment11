const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const employeesModel = require("./model/employeesModel");
const customersModel = require("./model/customersModel");
const teachersModel = require("./model/teachersModel");
const studentsModel = require("./model/studentsModel");

const app= express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/allpeoplesdb")
.then(()=>{
    console.log("Mongo DB is connected!!!");
});

app.get("/",(req,res)=>{
    res.send("employees, and customers and etc names....");
});

app.get("/customers", async (req,res)=>{
    const result = await customersModel.find({});
    res.json(result);
});

app.get("/employees",async  (req,res)=>{
    const result = await employeesModel.find({});
    res.json(result);
});

app.get("/students", async  (req,res)=>{
    const result = await studentsModel.find({});
    res.json(result);
});

app.get("/teachers", async (req,res)=>{
    const result = await teachersModel.find({});
    res.json(result);
});

app.listen(5050, ()=>{
    console.log("API is running on 5050 Port ....");
});