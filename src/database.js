const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/chat")
  .then(() => {
    console.log("DB has been connected");
  })
  .catch((err) => console.log(err));
