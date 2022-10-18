require('dotenv').config()
const mongoose = require("mongoose");


// schema
const user_sehema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        reqired: true,
    },
   
    address: {
        type: String,
        reqired: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        reqired: true,

    },
    age: {
        type: String,
        reqired: true,
    },
    

})

module.exports = mongoose.model("User", user_sehema);