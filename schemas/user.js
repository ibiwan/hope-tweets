const mongoose     = require('mongoose')
mongoose.Promise = require('bluebird')

const userSchema = mongoose.Schema({
    first_name    : String,
    last_name     : String,
    email         : String,
    password_hash : String,
    last_login_at : Date,
    venues        : [String], // [Hope UMC Sanctuary]
})

const User = mongoose.model('User', userSchema)

module.exports = {
    model  : User,
    schema : userSchema,
}
