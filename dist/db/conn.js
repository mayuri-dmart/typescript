"use strict";
var Mongoose = require("mongoose");
Mongoose.connect("mongodb://localhost:27017/students-api", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {
    console.log("connection successfull");
}).catch(function (e) {
    console.log("no connection");
});
