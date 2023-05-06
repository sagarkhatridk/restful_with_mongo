const mongoose = require("mongoose")
const validator = require('validator')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenght: 3
    },

    email: {
        type: String,
        required: true,
        unique: [true, "email alread exists"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email")
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        minlenght: 10,
        maxlenght: 10,
        unique: true
    },
    address: {
        type: String,
        required: true,
    }
})



// we will create a new collection with models 

const Student = new mongoose.model('Student', studentSchema)

module.exports = Student 