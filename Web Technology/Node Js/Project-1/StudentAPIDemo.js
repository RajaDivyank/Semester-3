const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./Model/Student');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/Colleges').then(()=>{
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    app.get("/",(req,res)=>[
        res.send("hello from home")
    ])
    app.get('/students', async (req,res)=>{
        const data = await Student.find();
        res.send(data);
    });

    app.get('/students/:id',async (req,res)=>{
        const data = await Student.findOne({EnrollmentNo:req.params.id});
        res.send(data);
    });

    app.post('/students',async (req,res)=>{
        const stu = new Student();
        stu.EnrollmentNo = req.body.SE;
        stu.StudentName = req.body.SN;
        stu.StudentBranch = req.body.SB;
        stu.StudentSemester = req.body.SEM;
        const data = await stu.save();
        res.send(data);
    });

    app.put('/students/:id', async (req,res)=>{
        const data = await Student.findOne({EnrollmentNo:req.params.id});
        data.StudentName = req.body.SN;
        data.StudentBranch = req.body.SB;
        await data.save();
        res.send(data);
    } );

    app.delete('/students/:id', async (req,res)=>{
        const data = await Student.deleteOne({EnrollmentNo:req.params.id});
        res.send(data);
    });

    app.listen(2003,()=>{
        console.log("Server is started at @ 2003");
    });
});