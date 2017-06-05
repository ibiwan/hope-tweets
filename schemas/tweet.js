var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var tweetSchema = mongoose.Schema({
    event_date: Date,
    created_at: {type: Date, default: Date.now},
    type: String

});

tweetSchema.methods.identify = function() {
    console.log([
        'I am scheduled for ' + this.event_date,
        'I was created at ' + this.created_at,
        ]);
}

var Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet


/**
event_date: date
type: scripture, hymn, call-response, prayer, other-text (last three external)
weight: integer
event:  9:00 AM Sunday Worship Service, 10:45 AM Sunday Worship Service, Saturday Night Alive, ...
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
