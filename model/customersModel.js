const mongoose = require("mongoose");

const customersModel = mongoose.model("customers",{
    name : {type : String},
    age : {type : Number},
    gender : {type : String}
});
module.exports = customersModel;