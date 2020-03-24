"use strict";
const mongoose = require("mongoose");
const MONGO_DB_URL = require("./config");

mongoose.Promise = global.Promise;

// Set up mongoose connection
module.exports = () => {
  mongoose.connect(
    MONGO_DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () =>
      // eslint-disable-next-line no-console
      console.error.bind(console, "MongoDB connection error:")
  );
};
