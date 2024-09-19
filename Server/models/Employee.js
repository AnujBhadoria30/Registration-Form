const mongoose = require('mongoose');

//Yahaan aapne ek EmployeeSchema banaya hai jisme name, email, aur password fields hain.
//EmployeeModel ko use karke aap MongoDB se data ko interact kar sakte ho.

const EmployeeSchema = new mongoose.Schema({

    name: String,
    email: String,
    password: String
})

const EmployeeModel = mongoose.model('employees', EmployeeSchema)
module.exports = EmployeeModel