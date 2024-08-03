const mongoose = require("mongoose");

mongoose.connect(DATABASE_URI)
.then(() => { console.log("connected to database")
.catch((e) => {console.log("connection to db failed");

const userSchema = mongoose.Schema({
  username:{
    type: string,
    required: true,
    unique: true
  },
  password:{
    type: string,
    required: true
  }
});

const todoSchema = mongoose.Schema({
  title: {
    type: string,
    required: true,
    unique: true
  },
  description: {
    type: string,
    required: true,
    unique: true
  },
  author:{}
});

const User = mongoose.Model("User", usesSchema);

module.exports = User;
