const mongoose = require("mongoose");
const DATABASE_URI = require("./config");

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
  author:{
    type: mongoose.Model.type.ObjectId,
    required: true,
    unique: true
  }
});
const User = mongoose.Model("User", usesSchema);
const Todo = mongoose.Model("Todo", todoSchema);
module.exports = { User, Todo };
