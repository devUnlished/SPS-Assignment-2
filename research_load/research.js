const express = require("express");
const mongoose = require("mongoose");
require("./Research_load.js");
const Research_load = mongoose.model("Research_load"); 
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://namfrans:54321Admin@firstclustler.jcmwvy5.mongodb.net/Research", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to DB!");
});

app.listen(9092, () => {
    console.log("Server is running on port 9092");
});

app.post("/research", (req, res) => {
    //payload
    var researchLoad = {
        topicOfResearch: req.body.topicOfResearch,
        duration: req.body.duration,
        participants: req.body.participants,
        supervisor: req.body.supervisor
    }

    var research = new Research_load(researchLoad);

    research.save().then(() => {
        console.log("New research topic registered");
    }).catch((err) => {
        if (err) {
            throw err;
        }
    });
    res.send("A new research topic created with success!");
});

app.get("/research/:id", (req, res) => {
    Research_load.findById(req.params.id).then((load) => {
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

//http://127.0.0.1:9092/research

