/* eslint-disable no-undef */
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Add name']
    },
    email: {
        type: String,
        required: [true, 'Add email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Add password']
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)