const express = require("express");
const mongoose = require("mongoose");
require("./Community_load.js");
const Community_load = mongoose.model("Community_load"); 
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://namfrans:54321Admin@firstclustler.jcmwvy5.mongodb.net/Community", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to DB!");
});

app.listen(9093, () => {
    console.log("Server is running on port 9093");
});

app.post("/community", (req, res) => {
    //payload
    var communityLoad = {
        majorityActivity: req.body.MajorityActivity,
        extraActivity: req.body.ExtraActivity,
        hoursPerSemester_22Weeks: req.body.HoursPerSemester_22Weeks
    }

    var community = new Community_load(communityLoad);

    community.save().then(() => {
        console.log("New community load created");
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
    res.send("A new community load created with success!");
});

app.get("/community/:id", (req, res) => {
    Community_load.findById(req.params.id).then((load) => {
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

