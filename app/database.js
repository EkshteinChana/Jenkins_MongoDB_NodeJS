const mongoose = require("mongoose");
// const MONGODB_URI = "mongodb://mongo:27017"
const MONGODB_URI = "localhost://27017"
mongoose.connect(MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  }).catch(err => {
    console.log('Could not connect to MongoDB.',MONGODB_URI ,err);
    process.exit();
  });