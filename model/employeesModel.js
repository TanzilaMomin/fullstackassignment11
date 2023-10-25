const mongoose = require("mongoose");

const employeesModel = mongoose.model("employees",{
    name : {type : String},
    age : {type : Number},
    gender : {type : String}
});
module.exports = employeesModel ;