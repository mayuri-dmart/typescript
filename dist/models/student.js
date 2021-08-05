"use strict";
var mongoose = require("mongoose");
var validator = require("validator");
var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "email is already present"],
        validate: function (value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email");
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
});
var student = new mongoose.model('Student', schema);
module.exports = student;
