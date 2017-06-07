var mongoose     = require('mongoose')
mongoose.Promise = require('bluebird')

var eventSchema = require('./event').schema
var userSchema  = require('./user').schema

var tweetSchema = mongoose.Schema({
    event      : eventSchema,
    status     : String, // draft, queued, posted
    type       : String, // scripture, hymn, call-response, prayer, other-text (last three external)
    tweet      : {},     // actual twitter tweet object
    created_by : userSchema,
    weight     : {
        type    : Number,
        default : 0
    },
    created_at : {
        type    : Date,
        default : Date.now
    },
})

tweetSchema.methods.identify = function () {
    console.log([
        'I am scheduled for ' + this.event.name,
        'I was created at ' + this.created_at,
    ])
}

var Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet

module.exports = {
    model  : Tweet,
    schema : tweetSchema,
}
