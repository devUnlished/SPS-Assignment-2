const mongoose = require("mongoose");

mongoose.model("loads", {
    CourseName: {
        type:String
    },
    CourseCode: {
        type: String
    },
    NovertyOfCourse: {
        type:String
    },
    Contact: {
        type:Number
    },
    Excursion: {
        type:Number
    },
    GroupSizeStandard: {
        type: Number
    },
    MGC: {
        type:String
    },
    GroupID: {
        type:String
    },
    NumberOfGroupsCordinated: {
        type:Number
    },
    GroupSizeStudents: {
        type:Number
    },

    LoadFactorsNC: {
        type:Number
    },
    LoadFactorsGS: {
        type:Number
    },
    LoadFactorsMGC: {
        type:Number
    },
    LoadFactorsCC: {
        type:Number
    },
    LoadFactorsExcursion: {
        type:Number
    },
    LoadFactorsCCT: {
        type:Number
    },
    TotalLoad: {
        type:Number
    },
    Variance: {
        type:Number
    }
});