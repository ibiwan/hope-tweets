var mongoose     = require('mongoose')
mongoose.Promise = require('bluebird')

var eventSchema = require('./event').event_schema

var tweetSchema = mongoose.Schema({
    created_at: {
        type   : Date,
        default: Date.now
    },
    type      : String, // scripture, hymn, call-response, prayer, other-text (last three external)
    weight    : {
        type   : Number,
        default: 0
    },
    event     : eventSchema
})

tweetSchema.methods.identify = function () {
    console.log([
        'I am scheduled for ' + this.event.name,
        'I was created at ' + this.created_at,
    ])
}

var Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet


/**
 event_date: date
 type:
 weight: integer
 event:
 event_weight: integer
 status: draft, queued, posted
 created_at: date
 created_by: User
 venue: Hope UMC Sanctuary
 tweet: twitter tweet object
 **/

/**
 String
 Number
 Date
 Buffer
 Boolean
 Mixed
 ObjectId
 Array
 **/
