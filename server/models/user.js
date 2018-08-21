var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bcrypt = require('bcryptjs');
require('mongoose-type-email');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        unique: true,
        required: true,

    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
},{
    timestamps: true
})

userSchema.pre('save', function (next) {
    var hash = bcrypt.hashSync(this.password, 10);
    this.password = hash
    next()
})

var User = mongoose.model('User', userSchema)

module.exports = User