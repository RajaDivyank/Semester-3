const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const Laptop = require('./Model/Laptop');

mongoose.connect("mongodb://127.0.0.1:27017/Products").then(()=>{
    const app = express();
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(cors());

    app.get("/",(req,res)=>{
        res.send("<h1>Hello From World</h1>");
    });

    app.get("/laptops", async (req,res)=>{
        const data = await Laptop.find();
        res.send(data);
    });

    app.get("/laptops/:id" ,async (req,res)=>{
        const data = await Laptop.findOne({LaptopID:req.params.id});
        res.send(data);
    });

    app.post('/laptops',async (req,res)=>{
        const data = new Laptop();
        data.LaptopID = req.body.LaptopID;
        data.LaptopName = req.body.LaptopName;
        data.LaptopImage = req.body.LaptopImage;
        data.LaptopRam = req.body.LaptopRam;
        data.LaptopProcessor = req.body.LaptopProcessor;
        data.LaptopGraphicsCard = req.body.LaptopGraphicsCard;
        data.LaptopHD = req.body.LaptopHD;
        data = await lap.save();
        res.send(data);
    });

    app.put('/laptops/:id', async (req,res)=>{
        const data = await Laptop.findOne({LaptopID:req.params.id});
        data.LaptopID = req.body.LaptopID;
        data.LaptopName = req.body.LaptopName;
        data.LaptopImage = req.body.LaptopImage;
        data.LaptopRam = req.body.LaptopRam;
        data.LaptopProcessor = req.body.LaptopProcessor;
        data.LaptopGraphicsCard = req.body.LaptopGraphicsCard;
        data.LaptopHD = req.body.LaptopHD;
        await data.save();
        res.send(data);
    } );

    app.delete('/laptops/:id', async (req,res)=>{
        const data = await Laptop.deleteOne({LaptopID:req.params.id});
        res.send(data);
    });

    app.listen(2001,(req,res)=>{
        console.log("Server Started at @ 2001");
    });
});