const mongoose = require("mongoose");

mongoose.model("Community_load", {
    majorityActivity: {
        type: String,
        required: false
    },
    extraActivity: {
        type: String,
        required: false
    },
    hoursPerSemester_22Weeks: {
        type: Number,
        required: true
    }
});