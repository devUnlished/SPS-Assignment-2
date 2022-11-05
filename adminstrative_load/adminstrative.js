const express = require("express");
const mongoose = require("mongoose");
require("./Admin_load.js");
const Admin_load = mongoose.model("Admin_load"); 
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://namfrans:54321Admin@firstclustler.jcmwvy5.mongodb.net/Adminstrative", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to DB!");
});

app.listen(9090, () => {
    console.log("Server is running on port 9090");
});

app.post("/adminstrative", (req, res) => {
    //payload
    var adminLoad = {
        majorityActivity: req.body.MajorityActivity,
        extraActivity: req.body.ExtraActivity,
        hoursPerSemester_22Weeks: req.body.HoursPerSemester_22Weeks
    }

    var adminstrative = new Admin_load(adminLoad);

    adminstrative.save().then(() => {
        console.log("New adminstrative load created");
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
    res.send("A new adminstrative load created with success!");
});

app.get("/adminstrative/:id", (req, res) => {
    Admin_load.findById(req.params.id).then((load) => {
        if(load){
            res.json(load);
        }else{
            res.sendStatus(404);
        }
    }).catch(err => {
        if(err){
            throw err;
        }
    });
});

//http://127.0.0.1:9090/adminstrative

