const mongoose = require("mongoose");

const studentsModel = mongoose.model("students",{
    name : {type : String},
    age : {type : Number},
    gender : {type : String}
});
module.exports = studentsModel ;