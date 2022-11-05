const mongoose = require("mongoose");

mongoose.model("Admin_load", {
    topicOfResearch: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    participants: {
        type: Object,
        required: false
    },
    supervisor: {
        type: String,
        required:true
    }
});