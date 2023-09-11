const mongoose = require("mongoose");

const app = require("./app");

const { HOST } = process.env;

mongoose
  .connect(HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
