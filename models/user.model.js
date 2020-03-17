const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    _id: Number,
    first_name: String,
    last_name: String,
    Contact: Number,
    email: String
}, {
    timestamps: false
});

module.exports = mongoose.model('User', UserSchema);