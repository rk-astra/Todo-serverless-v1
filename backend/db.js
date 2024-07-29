const mongoose = require("mongoose");

mongoose.connect(DATABASE_URI)
.then(() => { console.log("connected to database")
.catch((e) => {console.log("connection to db failed");
