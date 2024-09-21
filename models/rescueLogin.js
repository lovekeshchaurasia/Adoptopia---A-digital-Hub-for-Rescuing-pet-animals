const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const rescueAdminSchema = new Schema({
    email : {
        type : String ,
        required : true
    }
});

rescueAdminSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('rescueAdmin' , rescueAdminSchema);