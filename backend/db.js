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
})
