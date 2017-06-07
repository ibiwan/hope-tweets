var mongoose     = require('mongoose')
mongoose.Promise = require('bluebird')

var userSchema = mongoose.Schema({
    first_name    : String,
    last_name     : String,
    email         : String,
    password_hash : String,
    last_login_at : Date,
    venues        : [String], // [Hope UMC Sanctuary]
})

var User = mongoose.model('User', userSchema)

module.exports = {
    model  : User,
    schema : userSchema,
}
