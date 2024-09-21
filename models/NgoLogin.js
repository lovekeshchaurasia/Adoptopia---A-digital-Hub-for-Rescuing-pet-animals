const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const ngoSchema = new Schema({
    email : {
        type : String ,
        required : true
    }
});

ngoSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('ngo' , ngoSchema);