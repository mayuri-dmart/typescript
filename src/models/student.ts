const mongoose = require("mongoose");
const validator = require("validator");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },

    email: {
        type: String,
        required: true,
        unique: [true, "email is already present"],
        validate(value:any) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email")
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

})

const student = new mongoose.model('Student', schema);

module.exports = student;