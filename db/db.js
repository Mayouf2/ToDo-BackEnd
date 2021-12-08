
const mongoose = require("mongoose");


mongoose.connect( process.env.MONGOURL).then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);
