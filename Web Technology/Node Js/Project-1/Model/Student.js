const mongoose = require('mongoose');

const schema = mongoose.Schema({
    EnrollmentNo : String,
    StudentName : String,
    StudentBranch : String,
    StudentSemester : Number
});

module.exports = mongoose.model("Student",schema);