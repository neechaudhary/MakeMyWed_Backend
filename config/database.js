require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log(" MakeMyWed Database Connected Successfuly");
  } catch (error) {
    console.log("(MakeMyWed Database Connection error) ", error);
  }
};
module.exports = connectDB;
